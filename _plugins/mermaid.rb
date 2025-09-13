# Jekyll Mermaid Plugin for GitHub Pages
module Jekyll
  class MermaidBlock < Liquid::Block
    def render(context)
      content = super.strip
      "<div class=\"mermaid\">\n#{content}\n</div>"
    end
  end

  class MermaidTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      "<div class=\"mermaid\">\n#{@text}\n</div>"
    end
  end
end

Liquid::Template.register_tag('mermaid', Jekyll::MermaidBlock)
Liquid::Template.register_tag('mermaid_diagram', Jekyll::MermaidTag)
