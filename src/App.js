import { ConfiguratorPreviewDialog } from "@oak-some/configurator-previewer";

function App() {
  return (
    <>
      <ConfiguratorPreviewDialog
        configuratorJson="/configurator-v1.0.0.json"
        imagePrefix="https://imagedelivery.net/aYYmWUcv7lRhpLdU4ojPsA/"
        imageSuffix="/public"
        onVariableSetChange={vars => {
          console.log(vars);
        }}
      />
    </>
  );
}

export default App;
