var index_ = function () {

    /*metodos, propiedades privadas*/
    var _private = {};

    _private.setBarras = function (data) {


        var chart = AmCharts.makeChart("chartdiv", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,
            "dataProvider": data,
            "valueAxes": [{
                    "position": "left",
                    "title": "Numero de Cursos"
                }],
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "fillColorsField": "color",
                    "fillAlphas": 1,
                    "lineAlpha": 0.1,
                    "type": "column",
                    "valueField": "numerocursos"
                }],
            "depth3D": 20,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "idciclo",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 90
            },
            "export": {
                "enabled": true
            }

        });


    };

    _private.setPie = function (data) {
        var chart = AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "theme": "light",
            "titles": [{
                    "text": "NUMERO DE CURSOS POR CICLO",
                    "size": 16
                }],
            "dataProvider": data,
            "valueField": "numerocursos",
            "titleField": "idciclo",
            "startEffect": "elastic",
            "startDuration": 2,
            "labelRadius": 15,
            "innerRadius": "50%",
            "depth3D": 10,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "angle": 15,
            "export": {
                "enabled": true
            }
        });
    };

    /*metodos, propiedades publicas*/
    var _public = {};

    _public.init = function () {
        $('#btnGrafico01').click(function () {
            index.getGraficoBarras();
        });
        $('#btnGrafico02').click(function () {
            index.getGraficoPie();
        });
    };

    _public.getGraficoBarras = function () {
        $.ajax({
            type: "POST",
            data: {parm: 'B'},
            url: 'php/ConsultarData.php',
            dataType: 'json',
            success: function (data) {
                _private.setBarras(data);
            }
        });
    };

    _public.getGraficoPie = function () {
        $.ajax({
            type: "POST",
            data: {parm: 'B'},
            url: 'php/ConsultarData.php',
            dataType: 'json',
            success: function (data) {
                _private.setPie(data);
            }
        });
    };

    return _public;

};

var index = new index_();
