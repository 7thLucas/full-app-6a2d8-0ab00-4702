/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};

export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "App Name",
      minLength: 1,
      maxLength: 100,
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "tagline",
      type: "string",
      required: false,
      label: "Tagline",
      maxLength: 120,
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Brand Color",
      fields: [
        {
          fieldName: "primary",
          type: "color",
          required: true,
          label: "Primary (LIVE / CTA)",
        },
        {
          fieldName: "secondary",
          type: "color",
          required: true,
          label: "Secondary (Score Highlight)",
        },
        {
          fieldName: "accent",
          type: "color",
          required: true,
          label: "Accent (Six / Positive)",
        },
      ],
    },
    {
      fieldName: "backgroundColor",
      type: "color",
      required: false,
      label: "Page Background Color",
    },
    {
      fieldName: "cardBackgroundColor",
      type: "color",
      required: false,
      label: "Card Background Color",
    },
    {
      fieldName: "navLinks",
      type: "array",
      required: false,
      label: "Navigation Links",
      item: {
        type: "object",
        fields: [
          { fieldName: "label", type: "string", required: true, label: "Label" },
          { fieldName: "href", type: "string", required: true, label: "Path" },
        ],
      },
    },
    {
      fieldName: "showWeather",
      type: "boolean",
      required: false,
      label: "Show Weather Panel",
    },
    {
      fieldName: "showWagonWheel",
      type: "boolean",
      required: false,
      label: "Show Wagon Wheel",
    },
    {
      fieldName: "showWinProbability",
      type: "boolean",
      required: false,
      label: "Show Win Probability Meter",
    },
    {
      fieldName: "showPointsTable",
      type: "boolean",
      required: false,
      label: "Show Points Table Tab",
    },
    {
      fieldName: "footerText",
      type: "string",
      required: false,
      label: "Footer Text",
      maxLength: 200,
    },
    {
      fieldName: "heroImage",
      type: "file",
      required: false,
      label: "Hero / Banner Image",
    },
  ],
};
