# QdtViz: *Get a Visualization from Qlik Sense*

![QdtViz](../assets/embedded.png?raw=true "QdtViz")

- This component can be used to create or get a native Qlik Sense vizualization. There are two primary ways to do this:
  - **Get Existing:** If you define the `id` prop, then it will get that Qlik Sense vizualization.
  - **Create New:** If you define the `type`, `cols`, and `options` props it will create a new vizualization. 
- The `width` and `height` props are both optional, and default to '100%'.
- The `QdtViz` Component uses the [Capability Api - getObject](https://help.qlik.com/en-US/sense-developer/November2019/Subsystems/APIs/Content/Sense_ClientAPIs/CapabilityAPIs/AppAPI/getObject-method.htm)
method

## Properties

| prop             | type          | description   |
| ---------------- | ------------- | ------------- |
| id               | String        | Id for an existing visualization |
| type             | String        | [see here][vizApiCreate] |
| cols             | Array         | [see here][vizApiCreate] |
| options          | Object        | [see here][vizApiCreate] |
| width            | String        | Sets width of viz |
| height           | String        | Sets height of viz |
| exportData       | Boolean       | Show button for export in CSV |
| exportDataTitle  | String        | Optional. Set the button title. Defaults to `Export Data`  |
| exportDataOptions | Object        | [see here][exportData]. Defaults to `{ format: 'CSV_T', state: 'P' }` |
| exportImg        | Boolean       | Show button for export in JPG |
| exportImgTitle   | String        | Optional. Set the button title. Defaults to `Export Image`  |
| exportImgOptions  | Object        | [see here][exportImg]. Defaults to `{ width: 300, height: 400, format: 'JPG' }` |
| exportPdf        | Boolean       | Show button for export in PDF |
| exportPdfTitle   | String        | Optional. Set the button title. Defaults to `Export Pdf`  |
| exportPdfOptions  | Object        | [see here][exportPdf]. Defaults to `{ documentSize: 'A4', orientation: 'landscape', aspectRatio: 2 }` | 

[vizApiCreate]: https://help.qlik.com/en-US/sense-developer/February2018/Subsystems/APIs/Content/CapabilityAPIs/VisualizationAPI/create-method.htm
[cols]: https://help.qlik.com/en-US/sense-developer/February2018/Subsystems/APIs/Content/CapabilityAPIs/VisualizationAPI/columns.htm
[qListObjectDef]: https://help.qlik.com/en-US/sense-developer/February2018/Subsystems/EngineAPI/Content/GenericObject/PropertyLevel/ListObjectDef.htm
[exportData]: https://help.qlik.com/en-US/sense-developer/September2018/Subsystems/APIs/Content/Sense_ClientAPIs/CapabilityAPIs/VisualizationAPI/exportData-method.htm
[exportImg]: https://help.qlik.com/en-US/sense-developer/September2018/Subsystems/APIs/Content/Sense_ClientAPIs/CapabilityAPIs/VisualizationAPI/exportImg-method.htm
[exportPdf]: https://help.qlik.com/en-US/sense-developer/September2018/Subsystems/APIs/Content/Sense_ClientAPIs/CapabilityAPIs/VisualizationAPI/exportPdf-method.htm

## Code

### Vanilla JavaScript

- See the [HTML Template](https://github.com/qlik-demo-team/qdt-components/blob/master/docs/usage/Html.md) for the
basic page setup. 

```js
var options = {
  config: { /* host, port, appid, etc. */ },
  connections: { /* vizApi, engineAPI */}
}

var qdtComponents = new QdtComponents(options.config, options.connections);

var element = document.getElementById('qdt1');

qdtComponents.render(
  "QdtViz", 
  {
    type: 'barchart',
    id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
    height: '300px',
    exportData: true,
    exportImg: true,
    exportImgOptions: { width: 600, height: 400, format: 'JPG' },
    exportPdf: true,
    exportPdfOptions: { documentSize: { width: 300, height: 150 } },
  }, 
  element
);
```

### React

```jsx
<QdtComponent
  type="QdtViz"
  props={{
    type: 'barchart',
    id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
    height: '300px',
    exportData: true,
    exportImg: true,
    exportImgOptions: { width: 600, height: 400, format: 'JPG' },
    exportPdf: true,
    exportPdfOptions: { documentSize: { width: 300, height: 150 } },
  }}
/>
```

### Angular

```js
// qdt-viz.component.ts
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'qdt-viz',
  templateUrl: './qdt-viz.component.html',
})
export class QdtVizComponent implements OnInit {

  constructor(private el: ElementRef) { }

  chart_options = {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
      height: '300px',
      exportData: true,
      exportImg: true,
      exportImgOptions: { width: 600, height: 400, format: 'JPG' },
      exportPdf: true,
      exportPdfOptions: { documentSize: { width: 300, height: 150 } },
    },
  };

  ngOnInit() {

  }

}
```

```html
<!-- html -->
<qdt-viz [Component]="chart_options.type" [props]="chart_options.props"></qdt-viz>
```


## Examples


- [Embed Object](https://qdt-apps.qlik.com/qdt-components/react/#/embed-object) (React)
- [Embed Objects from Multiple Apps](https://qdt-apps.qlik.com/qdt-components/react/#/embed-object-multi-app) (React)
- [Create a Session Object](https://qdt-apps.qlik.com/qdt-components/react/#/session-object) (React)

---

[← Back to All Components](https://github.com/qlik-demo-team/qdt-components#components)