#!/usr/bin/env node

/**
 * Documentation Validation Script
 * 
 * This script validates the documentation structure and content
 * for the Business Services Hub documentation portal.
 */

const fs = require('fs');
const path = require('path');

// Required files and their expected content
const requiredFiles = {
  'README.md': ['# 📖 Business Services Hub - Documentation Portal'],
  'PROJECT_DOCUMENTATION.md': ['# 📋 Business Services Hub - Project Documentation'],
  'BUSINESS_PLAN.md': ['# 💼 Business Services Hub - Business Plan'],
  'EXECUTIVE_SUMMARY.md': ['# 📊 Business Services Hub - Executive Summary'],
  'CHANGELOG.md': ['# Changelog'],
  'docs/README.md': ['# 📚 Technical Documentation'],
  'docs/ARCHITECTURE_DIAGRAMS.md': ['# 🏗️ Business Services Hub - Architecture Diagrams'],
  'docs/FEATURES_DETAILED.md': ['# ⚡ Business Services Hub - Features Detailed'],
  'docs/SETUP_DEPLOYMENT_GUIDE.md': ['# 🚀 Business Services Hub - Setup & Deployment Guide'],
  'docs/SECURITY_GUIDE.md': ['# 🔒 Business Services Hub - Security Guide'],
  'docs/CONTRIBUTING.md': ['# 🤝 Contributing to Business Services Hub'],
  'docs/ROADMAP.md': ['# 🗺️ Business Services Hub - Development Roadmap']
};

// Check if file exists and contains expected content
function validateFile(filePath, expectedContent) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(expectedContent)) {
    console.error(`❌ Invalid content in: ${filePath}`);
    return false;
  }

  console.log(`✅ Valid: ${filePath}`);
  return true;
}

// Validate all required files
function validateDocumentation() {
  console.log('🔍 Validating documentation structure...\n');
  
  let allValid = true;
  
  for (const [filePath, expectedContent] of Object.entries(requiredFiles)) {
    const isValid = validateFile(filePath, expectedContent[0]);
    if (!isValid) {
      allValid = false;
    }
  }

  console.log('\n📊 Validation Summary:');
  if (allValid) {
    console.log('✅ All documentation files are valid!');
    console.log('🎉 Documentation portal is ready for use.');
  } else {
    console.log('❌ Some documentation files have issues.');
    console.log('🔧 Please fix the issues above before proceeding.');
  }

  return allValid;
}

// Check for common issues
function checkCommonIssues() {
  console.log('\n🔍 Checking for common issues...\n');
  
  const issues = [];
  
  // Check for broken internal links
  const readmeContent = fs.readFileSync('README.md', 'utf8');
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  
  while ((match = linkRegex.exec(readmeContent)) !== null) {
    const [, text, link] = match;
    if (link.startsWith('./')) {
      // Check for both .md and .html versions (Jekyll generates .html)
      const mdPath = link.endsWith('.html') ? link.replace('.html', '.md') : link;
      const htmlPath = link.endsWith('.md') ? link.replace('.md', '.html') : link;
      
      if (!fs.existsSync(link) && !fs.existsSync(mdPath) && !fs.existsSync(htmlPath)) {
        issues.push(`Broken link in README.md: "${text}" -> "${link}"`);
      }
    }
  }
  
  // Check for missing table of contents
  const filesToCheck = ['PROJECT_DOCUMENTATION.md', 'BUSINESS_PLAN.md'];
  filesToCheck.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (!content.includes('Table of Contents') && !content.includes('## Table of Contents')) {
        issues.push(`Missing Table of Contents in ${file}`);
      }
    }
  });
  
  if (issues.length > 0) {
    console.log('⚠️  Found potential issues:');
    issues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    console.log('✅ No common issues found!');
  }
  
  return issues.length === 0;
}

// Main execution
if (require.main === module) {
  console.log('📚 Business Services Hub Documentation Validator\n');
  
  const isValid = validateDocumentation();
  const noIssues = checkCommonIssues();
  
  if (isValid && noIssues) {
    console.log('\n🎉 Documentation validation completed successfully!');
    process.exit(0);
  } else {
    console.log('\n❌ Documentation validation failed. Please fix the issues above.');
    process.exit(1);
  }
}

module.exports = { validateDocumentation, checkCommonIssues };
