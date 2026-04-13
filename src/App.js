import { ConfiguratorPreviewDialog } from "configurator-previewer";
// import myConfig from "./configurator-v1.0.0.json";

function App() {
  return (
    <>
      {/* <ConfiguratorPreviewDialog configuratorJson={myConfig} /> */}

      <ConfiguratorPreviewDialog
        configuratorJson="/configurator-v1.0.0.json"
        imagePrefix="https://imagedelivery.net/aYYmWUcv7lRhpLdU4ojPsA/"
        imageSuffix="/public"
      />

      {/* <ConfiguratorPreviewDialog configuratorJson={} /> */}
    </>
  );
}

export default App;
