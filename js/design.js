am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [ {
    "product": "T-Shirt",
    "percentage": 501.9
}, {
    "product": "Jacket",
    "percentage": 301.9
}, {
    "product": "Suit",
    "percentage": 201.1
}, {
    "product": "Dress",
    "percentage": 165.8
}, {
    "product": "Blouse",
    "percentage": 139.9
}, {
    "product": "Sweater.",
    "percentage": 128.3
}, {
    "product": "Jeans",
    "percentage": 99
}, {
    "product": "Vest",
    "percentage": 60
}, {
    "product": "Pajamas",
    "percentage": 50
} ];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "percentage";
pieSeries.dataFields.category = "product";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;
