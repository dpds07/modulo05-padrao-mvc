const series = require ("../model/series")
const path = require ("path");
const { dirname } = require("path");
const SeriesController = {
    index: (req, res) => res.sendfile(path.join(__dirname,"..", "views", "series.html")),
    show: (req, res) => res.send(series.filter(serie => serie.id == req.params.id)[0])
};

module.exports = SeriesController;