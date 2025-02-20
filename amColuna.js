require.config({
  paths: {
    index: "/extensions/amColuna/index",
    xy: "/extensions/amColuna/xy",
    Animated: "/extensions/amColuna/Animated",
  },
  shim: {
    "/index": {
      init: function () {
        return window.am5core;
      },
    },
    "/xy": {
      deps: ["index"],
      exports: "xy",
      init: function () {
        return window.am5charts;
      },
    },
    "/Animated": {
      deps: ["index"],
      exports: "Animated",
      init: function () {
        return window.am5themes_Animated;
      },
    },
  },
});

define([
  "qlik",
  "jquery",
  "text!./style.css",
  "index",
  "xy",
  "Animated",
], function (qlik, $, cssContent, index, xy, Animated) {
  "use strict";
  $("<style>").html(cssContent).appendTo("head");

  return {
    initialProperties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [],
        qInitialDataFetch: [
          {
            qWidth: 10,
            qHeight: 50,
          },
        ],
      },
    },
    definition: {
      type: "items",
      component: "accordion",
      items: {
        dimensions: {
          uses: "dimensions",
          min: 0,
          items : {
            imagens_bullet: {
                type: "string",
                expression: "optional",
                expressionType: "dimension",
                ref: "qAttributeExpressions.0.qExpression",
                label: "Imagens no Bullet",
            }
          }
        },
        measures: {
          uses: "measures",
          min: 0,
        },
        sorting: {
          uses: "sorting",
        },
        settings: {
          uses: "settings",
          items: {
            MyStringProp: {
              ref: "bullet",
              type: "boolean",
              label: "Bullet Imagem",
              defaultValue: false
            }
          }
        },
      }
    },
    snapshot: {
      canTakeSnapshot: true,
    },
    paint: function ($element, layout) {
      var html = '<div id="' + layout.qInfo.qId + '" class="amColuna_coluna">Ola Mundo!</div>';
      $element.html(html);

      var numero_de_linhas = layout.qHyperCube.qDataPages[0].qMatrix.length;
   
      var dados = [];
      var c = 0;

      //verificar o caminho para o qText

      for (c = 0; c < numero_de_linhas; c++) {
        dados.push({
          name: layout.qHyperCube.qDataPages[0].qMatrix[c][0].qText,
          steps: layout.qHyperCube.qDataPages[0].qMatrix[c][1].qNum,
          pictureSettings: {
            src: layout.qHyperCube.qDataPages[0].qMatrix[c][0].qAttrExps.qValues[0].qText,
          }
        });
      }
      
      //console.log(layout.qHyperCube.qDataPages[0].qMatrix[0][0].qAttrExps.qValues[0].qText);
      //por algum motivo esse console.log faz o grafico nao renderizar
      //console.log(layout.qHyperCube.qDataPages[0].qMatrix[c][0].qAttrExps.qValues[0].qText);

      //continue assistindo o video: a partir de 12minutos e 10 segundos https://www.youtube.com/watch?v=7bo9PSWgULA

      am5.ready(function () {
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new(layout.qInfo.qId);

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        var data = dados;

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            paddingBottom: 50,
            paddingTop: 40,
            paddingLeft: 0,
            paddingRight: 0,
          })
        );

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

        var xRenderer = am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 60,
        });
        xRenderer.grid.template.set("visible", false);

        var xAxis = chart.xAxes.push(
          am5xy.CategoryAxis.new(root, {
            paddingTop: 40,
            categoryField: "name",
            renderer: xRenderer,
          })
        );

        var yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.grid.template.set("strokeDasharray", [3]);

        var yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(root, {
            min: 0,
            renderer: yRenderer,
          })
        );

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: "Income",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "steps",
            categoryXField: "name",
            sequencedInterpolation: true,
            calculateAggregates: true,
            maskBullets: false,
            tooltip: am5.Tooltip.new(root, {
              dy: -30,
              pointerOrientation: "vertical",
              labelText: "{valueY}",
            }),
          })
        );

        series.columns.template.setAll({
          strokeOpacity: 0,
          cornerRadiusBR: 10,
          cornerRadiusTR: 10,
          cornerRadiusBL: 10,
          cornerRadiusTL: 10,
          maxWidth: 50,
          fillOpacity: 0.8,
        });

        var currentlyHovered;

        series.columns.template.events.on("pointerover", function (e) {
          handleHover(e.target.dataItem);
        });

        series.columns.template.events.on("pointerout", function (e) {
          handleOut();
        });


        
        function handleHover(dataItem) {
          if (dataItem && currentlyHovered != dataItem) {
            handleOut();
            currentlyHovered = dataItem;
            var bullet = dataItem.bullets[0];
            bullet.animate({
              key: "locationY",
              to: 1,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic),
            });
          }
        }

        function handleOut() {
          if (currentlyHovered) {
            var bullet = currentlyHovered.bullets[0];
            bullet.animate({
              key: "locationY",
              to: 0,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic),
            });
          }
        }

        var circleTemplate = am5.Template.new({});

        if (layout.bullet) {
          //Inicio do bullet
          series.bullets.push(function (root, series, dataItem) {
            var bulletContainer = am5.Container.new(root, {});
            var circle = bulletContainer.children.push(
              am5.Circle.new(
                root,
                {
                  radius: 34,
                },
                circleTemplate
              )
            );

            var maskCircle = bulletContainer.children.push(
              am5.Circle.new(root, { radius: 27 })
            );

            // only containers can be masked, so we add image to another container
            var imageContainer = bulletContainer.children.push(
              am5.Container.new(root, {
                mask: maskCircle,
              })
            );

            var image = imageContainer.children.push(
              am5.Picture.new(root, {
                templateField: "pictureSettings",
                centerX: am5.p50,
                centerY: am5.p50,
                width: 60,
                height: 60,
              })
            );

            return am5.Bullet.new(root, {
              locationY: 0,
              sprite: bulletContainer,
            });
          });
          //Fim do bullet
        }
        // heatrule
        series.set("heatRules", [
          {
            dataField: "valueY",
            min: am5.color(0x0000FF),
            max: am5.color(0x5faa46),
            target: series.columns.template,
            key: "fill",
          },
          {
            dataField: "valueY",
            min: am5.color(0xe5dc36),
            max: am5.color(0x5faa46),
            target: circleTemplate,
            key: "fill",
          },
        ]);

        series.data.setAll(data);
        xAxis.data.setAll(data);

        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineX.set("visible", false);
        cursor.lineY.set("visible", false);

        cursor.events.on("cursormoved", function () {
          var dataItem = series.get("tooltip").dataItem;
          if (dataItem) {
            handleHover(dataItem);
          } else {
            handleOut();
          }
        });

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();
        chart.appear(1000, 100);
      }); // end am5.ready()

      return qlik.Promise.resolve();
    },
  };
});
