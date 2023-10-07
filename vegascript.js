var choropleth = "homework2.vg.json"
var scatter = "scatterplot.vg.json"

vegaEmbed("#choro_map", choropleth).then(function(result)   {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#scatterp", scatter).then(function(result)   {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);