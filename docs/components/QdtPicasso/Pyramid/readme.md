# Pyramid

![Pyramid Chart](../assets/picassoPyramid.png)

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
  "QdtPicasso", 
  {
    type: 'pyramid',
    cols: [
      '[Case Owner Group]',
      {
        qDef: {
          qLabel: 'Open Cases',
          qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
        },
      },
      {
        qDef: {
          qLabel: 'Closed Cases',
          qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
        },
      },
    ],
    outerHeight: 400,
  }, 
  element
);
```

### React

```jsx
const chart_options = {
  type: 'QdtPicasso',
  props: {
    type: 'pyramid',
    cols: [
      '[Case Owner Group]',
      {
        qDef: {
          qLabel: 'Open Cases',
          qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
        },
      },
      {
        qDef: {
          qLabel: 'Closed Cases',
          qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
        },
      },
    ],
    outerHeight: 400,
  },
};

const App = () => {
    return (
        <main>
            <QdtComponent {...chart_options} />
        </main>
    )
}

render(<App />, document.getElementById('root'));
```

### Angular

```js
// pyramid-chart.component.ts
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'picasso-pyramid-chart',
  templateUrl: './picasso-pyramid-chart.component.html',
})
export class PicassoPyramidChartComponent implements OnInit {

  constructor(private el: ElementRef) { }

  chart_options = {
    type: 'QdtPicasso',
    props: {
      type: 'pyramid',
      cols: [
        '[Case Owner Group]',
        {
          qDef: {
            qLabel: 'Open Cases',
            qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
          },
        },
        {
          qDef: {
            qLabel: 'Closed Cases',
            qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
          },
        },
      ],
      outerHeight: 400,
    },
  };

  ngOnInit() {

  }

}
```

```html
<!-- html -->
<picasso-pyramid-chart [Component]="chart_options.type" [props]="chart_options.props"></picasso-pyramid-chart>
```

[← QdtPicasso](../)