const productPath = [
  { url: "/app/tagline", label: "Tagline" },
  {
    url: "/app/landing-page-headline-description",
    label: "Landing Page Headline Description",
  },
  { url: "/app/landing-page-headline", label: "Landing Page Headline" },
  { url: "/app/meta-descriptions", label: "Meta Descriptions" },
  { url: "/app/question-generator", label: "Question Generator" },
  { url: "/app/keyword-suggestion", label: "Keyword Suggestion" },
  { url: "/app/subject-suggestion", label: "Subject Suggestion" },
  { url: "/app/blog-post-intro", label: "Blog Post Intro" },
  { url: "/app/blog-post-ideas", label: "Blog Post Ideas" },
  { url: "/app/blog-post-conclusion", label: "Blog Post Conclusion" },
  { url: "/app/blog-post-headline", label: "Blog Post Headline" },
  { url: "/app/blog-post-summary", label: "Blog Post Summary" },
  { url: "/app/blog-post-aida", label: "Blog Post AIDA" },
  { url: "/app/blog-post-pas", label: "Blog Post Pas" },
  { url: "/app/grammar-correction", label: "Grammar Correction" },
  { url: "/app/mission-statement", label: "Mission Statement" },
  { url: "/app/vision-statement", label: "Vision Statement" },
  { url: "/app/value-proposition", label: "Value Proposition" },
  { url: "/app/adjust-tone-rewriting", label: "Rewrite - Adjust Tone" },
  { url: "/app/informal-email", label: "Informal Email" },
  { url: "/app/formal-email", label: "Formal Email" },
  { url: "/app/followup-email", label: "Follow-up Email" },
  { url: "/app/cold-email", label: "Sales Email" },
  { url: "/app/thanks-you-email", label: "Thanks You Email" },
  { url: "/app/prospecting-email", label: "Prospecting Email" },
  { url: "/app/productdescription", label: "Product Description" },
  { url: "/app/productdescriptionamazon", label: "Product Description Amazon" },
  { url: "/app/g-ad-title", label: "Google Ad Tilte" },
  { url: "/app/g-ad-description", label: "Google Ad Description" },
  { url: "/app/create-outline", label: "Create Outline" },
  { url: "/app/expand", label: "Expand an Outline" },
];

export default productPath;

interface productsTools {
  label: string;
  path: string;
  message: string;
  mainPlaceholder: string;
  productType: string;
  generateButtonName: string;
  toneTextField: boolean;
  headerTitle: string;
  labelsLists: any[];
  inputLimitation: string;
}
[];