$(window).on("load", function () {
    Chart.defaults.derivedLine = Chart.defaults.line;
    var t = Chart.controllers.line.prototype.draw,
        e = Chart.controllers.line.extend({
            draw: function () {
                t.apply(this, arguments);
                var e = this.chart.chart.ctx,
                    o = e.stroke;
                e.stroke = function () {
                    e.save(), (e.shadowColor = "#ffb6c0"), (e.shadowBlur = 30), (e.shadowOffsetX = 0), (e.shadowOffsetY = 20), o.apply(this, arguments), e.restore();
                };
            },
        });
    Chart.controllers.derivedLine = e;
    var o = document.querySelector("#thisYearRevenue").getContext("2d"),
        a =
            (new Chart(o, {
                type: "derivedLine",
                data: {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
                    datasets: [
                        {
                            data: [5e3, 1e4, 4e3, 14500, 8e3, 18500, 8e3, 2e4],
                            borderWidth: 4,
                            borderColor: "#FF4961",
                            pointBackgroundColor: "#FFF",
                            pointBorderColor: "#FF4961",
                            pointHoverBackgroundColor: "#FFF",
                            pointHoverBorderColor: "#FF4961",
                            pointRadius: 0,
                            pointHoverRadius: 6,
                            fill: !1,
                        },
                    ],
                },
                options: {
                    responsive: !0,
                    tooltips: { displayColors: !1, callbacks: { label: function (t, e) {}, title: function () {} } },
                    legend: { display: !1 },
                    scales: { xAxes: [{ gridLines: { display: !1 } }], yAxes: [{ ticks: { padding: 10, stepSize: 5e3, max: 2e4, min: 0 }, gridLines: { display: !0, drawBorder: !1, lineWidth: 1, color: "#e9ebf5" } }] },
                },
            }),
            document.querySelector("#lastYearRevenue").getContext("2d"));
    new Chart(a, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            datasets: [
                {
                    data: [7e3, 15e3, 6e3, 10500, 3e3, 11500, 4e3, 1e4],
                    borderWidth: 4,
                    borderDash: [8, 4],
                    borderColor: "#c3c3c3",
                    pointBackgroundColor: "#FFF",
                    pointBorderColor: "#c3c3c3",
                    pointHoverBackgroundColor: "#FFF",
                    pointHoverBorderColor: "#c3c3c3",
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    fill: !1,
                },
            ],
        },
        options: {
            responsive: !0,
            tooltips: { displayColors: !1, callbacks: { label: function (t, e) {}, title: function () {} } },
            legend: { display: !1 },
            scales: { xAxes: [{ gridLines: { display: !1 } }], yAxes: [{ ticks: { padding: 10, stepSize: 5e3, max: 2e4, min: 0 }, gridLines: { display: !0, drawBorder: !1, zeroLineColor: "#e5e5e5" } }] },
        },
    });
    Chart.defaults.hitRateDoughnut = Chart.defaults.doughnut;
    t = Chart.controllers.doughnut.prototype.draw;
    var r = Chart.controllers.doughnut.extend({
        draw: function () {
            t.apply(this, arguments);
            var e = this.chart.chart.ctx,
                o = e.fill,
                a = this.chart.width,
                r = this.chart.height,
                i = (r / 114).toFixed(2);
            (this.chart.ctx.font = i + "em Verdana"), (this.chart.ctx.textBaseline = "middle");
            var l = "82%",
                n = Math.round((a - this.chart.ctx.measureText(l).width) / 2),
                d = r / 2;
            (this.chart.ctx.fillStyle = "#ff0000"),
                "rtl" == $("html").data("textdirection") && (n = Math.round((a - this.chart.ctx.measureText(l).width) / 1.15)),
                this.chart.ctx.fillText(l, n, d),
                (e.fill = function () {
                    e.save(), (e.shadowColor = "#bbbbbb"), (e.shadowBlur = 30), (e.shadowOffsetX = 0), (e.shadowOffsetY = 12), o.apply(this, arguments), e.restore();
                });
        },
    });
    Chart.controllers.hitRateDoughnut = r;
    (o = document.getElementById("hit-rate-doughnut")),
        new Chart(o, {
            type: "hitRateDoughnut",
            data: { labels: ["Remain", "Completed"], datasets: [{ label: "Favourite", backgroundColor: ["#28D094", "#FF4961"], data: [18, 82] }] },
            options: { responsive: !0, title: { display: !1 }, legend: { display: !1 }, layout: { padding: { left: 16, right: 16, top: 16, bottom: 16 } }, cutoutPercentage: 92, animation: { animateScale: !1, duration: 2500 } },
        });
    Chart.defaults.dealsDoughnut = Chart.defaults.doughnut;
    t = Chart.controllers.doughnut.prototype.draw;
    var i = Chart.controllers.doughnut.extend({
        draw: function () {
            t.apply(this, arguments);
            var e = this.chart.chart.ctx,
                o = e.fill,
                a = this.chart.width,
                r = this.chart.height,
                i = (r / 114).toFixed(2);
            (this.chart.ctx.font = i + "em Verdana"), (this.chart.ctx.textBaseline = "middle");
            var l = "76%",
                n = Math.round((a - this.chart.ctx.measureText(l).width) / 2),
                d = r / 2;
            (this.chart.ctx.fillStyle = "#fff"),
                "rtl" == $("html").data("textdirection") && (n = Math.round((a - this.chart.ctx.measureText(l).width) / 1.15)),
                this.chart.ctx.fillText(l, n, d),
                (e.fill = function () {
                    e.save(), (e.shadowColor = "#FF4961"), (e.shadowBlur = 30), (e.shadowOffsetX = 0), (e.shadowOffsetY = 12), o.apply(this, arguments), e.restore();
                });
        },
    });
    Chart.controllers.dealsDoughnut = i;
    (o = document.getElementById("deals-doughnut")),
        new Chart(o, {
            type: "dealsDoughnut",
            data: { labels: ["Remain", "Completed"], color: "#fff", datasets: [{ label: "Favourite", borderWidth: 0, backgroundColor: ["#ff7b8c", "#FFF"], data: [24, 76] }] },
            options: { responsive: !0, title: { display: !1 }, legend: { display: !1 }, elements: {}, layout: { padding: { left: 16, right: 16, top: 16, bottom: 16 } }, cutoutPercentage: 94, animation: { animateScale: !1, duration: 5e3 } },
        });
    var l = document.getElementById("earning-chart").getContext("2d");
    new Chart(l, {
        type: "line",
        options: {
            responsive: !0,
            maintainAspectRatio: !1,
            datasetStrokeWidth: 3,
            pointDotStrokeWidth: 4,
            tooltipFillColor: "rgba(0,0,0,0.8)",
            legend: { display: !1, position: "bottom" },
            hover: { mode: "label" },
            scales: { xAxes: [{ display: !1 }], yAxes: [{ display: !1, ticks: { min: 0, max: 70 } }] },
            title: { display: !1, fontColor: "#FFF", fullWidth: !1, fontSize: 40, text: "82%" },
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [28, 35, 36, 48, 46, 42, 60],
                    backgroundColor: "rgba(255,117,136,0.12)",
                    borderColor: "#FF4961",
                    borderWidth: 3,
                    strokeColor: "#FF4961",
                    capBezierPoints: !0,
                    pointColor: "#fff",
                    pointBorderColor: "#FF4961",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 3,
                    pointRadius: 5,
                    pointHoverBackgroundColor: "#FFF",
                    pointHoverBorderColor: "#FF4961",
                    pointHoverRadius: 7,
                },
            ],
        },
    });
    $("#world-map-markers").vectorMap({
        map: "world_mill",
        backgroundColor: "#fff",
        zoomOnScroll: !1,
        series: { regions: [{ values: visitorData, scale: ["#ff7c8d", "#fdd6db"], normalizeFunction: "polynomial" }] },
        onRegionTipShow: function (t, e, o) {
            e.html(e.html() + " (Visitor - " + visitorData[o] + ")");
        },
    }),
        Morris.Donut({
            element: "sessions-browser-donut-chart",
            data: [
                { label: "Chrome", value: 3500 },
                { label: "Firefox", value: 2500 },
                { label: "Safari", value: 2e3 },
                { label: "Opera", value: 1e3 },
                { label: "Internet Explorer", value: 500 },
            ],
            resize: !0,
            colors: ["#40C7CA", "#FF7588", "#2DCEE3", "#FFA87D", "#16D39A"],
        });
});
