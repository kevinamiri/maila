import * as React from "react";
import { Suspense } from "react";
const ProductDescription = React.lazy(
  () => import("components/editors/ProductDescription")
);

export default function ProductDescriptionApp() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDescription
          message01='Please select the text you would like to modify'
          mainPlaceholder="Let's get started with a product description, shall we?"
          inputLimitation={15000}
          productType='4'
          headerTitle='Product Description'
          generateButtonName='Generate description'
          toneTextField={true}
          labelsLists={[
            {
              label: "Brand name",
              placeholder: "Brand/Business name",
            },
            {
              label: "Audience",
              placeholder: "Audience: e.g., those who love coffee, or public",
            },
            {
              label: "keywords",
              placeholder: "keywords are separated by commas",
            },
            {
              label: "Features",
              placeholder: "Features are separated by commas",
            },
          ]}
          path='/productdescription'
        />
      </Suspense>
    </>
  );
}
