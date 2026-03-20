import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nome do Produto",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "originalPrice",
      title: "Preço Original",
      type: "string",
    }),
    defineField({
      name: "discountText",
      title: "Texto de Desconto",
      type: "string",
      initialValue: "Consulte o preço especial",
    }),
    defineField({
      name: "whatsappMsg",
      title: "Mensagem Pré-configurada do WhatsApp",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Categoria (Smartphones, TVs, etc)",
      type: "string",
    }),
    defineField({
      name: "badge",
      title: "Texto do Selo (Ex: Lançamento)",
      type: "string",
    }),
    defineField({
      name: "isHot",
      title: "Destaque Vermelho (Badge Hot)?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isNew",
      title: "Destaque Verde (Badge New)?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Imagem do Produto",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
