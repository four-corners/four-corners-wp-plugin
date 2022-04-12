import { useState, useEffect, useRef } from "react";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  SelectControl,
  ToggleControl,
  TextControl,
  ExternalLink,
  Button,
  ResponsiveWrapper,
} from "@wordpress/components";
import {FourCorners} from "../assets/fourcorners.min.js";
console.log(FourCorners);
// import wasmSrc from "@contentauth/sdk/dist/assets/wasm/toolkit_bg.wasm?file";
// import workerSrc from "@contentauth/sdk/dist/cai-sdk.worker.min.js?file";

const wasmSrc = "https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/assets/wasm/toolkit_bg.wasm";
const workerSrc = "https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/cai-sdk.worker.min.js";

export default function Edit({ attributes, setAttributes }) {
  const [instance, setInstance] = useState(null);
  const blockRef = useRef({});

  useEffect(() => {
    // console.log(instance);
    // if(instance) instance.destroy();
    // const newInstance = new FourCorners(
    //   blockRef.current,
    //   {},
    //   { wasmSrc, workerSrc }
    // );
    // setInstance(newInstance);
  }, [attributes.image]);


  const onSelectImage = ( newImage ) => {
    setAttributes({
      image: {
        id: newImage.id,
        sizes: newImage.sizes,
        caption: newImage.caption,
        alt: newImage.alt_text,
        url: newImage.url
      }
    });
  };

  return (
    <div { ...useBlockProps() }>

      <div ref={blockRef}>
        {attributes.image ?
          <img src={attributes.image.url} />
        : "No image added"}
      </div>

{/*      {attributes.cutline ? 
        <div className="fc-cutline">
          {attributes.cutline}
        </div>
      : null}*/}
      
      <InspectorControls>
        <PanelBody 
          title={ __( "Four Corners Block", "promise" ) }
          initialOpen={true}>
          <PanelRow>
            <fieldset style={{ width: "100%" }}>
              <div className="editor-post-featured-image">
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectImage}
                    value={attributes.image ? attributes.image.id : null}
                    allowedTypes={ ["image"] }
                    render={({open}) => (
                      <div>
                        <Button 
                          className={attributes.image == "" ? "editor-post-featured-image__toggle" : "editor-post-featured-image__preview"}
                          onClick={open}>
                          {attributes.image && attributes.image.sizes ?
                            <img
                              src={attributes.image.sizes.thumbnail.url}
                              style={{ margin: "auto", display: "table" }} />
                          : __("Choose an image", "promise")}
                        </Button>

                        {attributes.image ?
                          <Button 
                            className="components-button is-secondary"
                            onClick={open}>
                            {__("Replace Image", "promise")}
                          </Button>
                        : null}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
              </div>
            </fieldset>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </div>
  );
}
