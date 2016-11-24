'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var echarts = require('echarts');
require('styles/price/PriceDetail.css');

require('styles/account/AnalysisPage.css');

var AnalysisPageComponent = function (_React$Component) {
  _inherits(AnalysisPageComponent, _React$Component);

  function AnalysisPageComponent() {
    _classCallCheck(this, AnalysisPageComponent);

    return _possibleConstructorReturn(this, (AnalysisPageComponent.__proto__ || Object.getPrototypeOf(AnalysisPageComponent)).apply(this, arguments));
  }

  _createClass(AnalysisPageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var myChart1 = echarts.init(document.getElementById('account_analysis-wrapper1'));
      var myChart2 = echarts.init(document.getElementById('account_analysis-wrapper2'));
      myChart1.setOption({
        legend: {
          data: ['策略累计收益率', '沪深300累计收益率曲线']
        },
        xAxis: {
          type: 'time'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '策略累计收益率',
          type: 'line',
          symbol: 'none',
          data: [["2014/12/1", "0.020299356"], ["2014/12/2", "-0.000869215"], ["2014/12/3", "-0.02046833"], ["2014/12/4", "-0.015952483"], ["2014/12/5", "0.048969685"], ["2014/12/8", "0.030666723"], ["2014/12/9", "0.091204076"], ["2014/12/10", "0.126861609"], ["2014/12/11", "0.159903253"], ["2014/12/12", "0.182534207"], ["2014/12/15", "0.196730924"], ["2014/12/16", "0.212296964"], ["2014/12/17", "0.212296964"], ["2014/12/18", "0.190979195"], ["2014/12/19", "0.272519004"], ["2014/12/22", "0.292010746"], ["2014/12/23", "0.277201273"], ["2014/12/24", "0.264587987"], ["2014/12/25", "0.272821737"], ["2014/12/26", "0.250191701"], ["2014/12/29", "0.280646862"], ["2014/12/30", "0.297545341"], ["2014/12/31", "0.274905719"], ["2015/1/5", "0.295166729"], ["2015/1/6", "0.317106311"], ["2015/1/7", "0.317106311"], ["2015/1/8", "0.353029039"], ["2015/1/9", "0.441600303"], ["2015/1/12", "0.441600303"], ["2015/1/13", "0.441600303"], ["2015/1/14", "0.441600303"], ["2015/1/15", "0.422324811"], ["2015/1/16", "0.424867367"], ["2015/1/19", "0.399299284"], ["2015/1/20", "0.373744985"], ["2015/1/21", "0.351059002"], ["2015/1/22", "0.351059002"], ["2015/1/23", "0.398199568"], ["2015/1/26", "0.398199568"], ["2015/1/27", "0.37554314"], ["2015/1/28", "0.380975947"], ["2015/1/29", "0.380975947"], ["2015/1/30", "0.380975947"], ["2015/2/2", "0.397304061"], ["2015/2/3", "0.373343101"], ["2015/2/4", "0.373343101"], ["2015/2/5", "0.444321117"], ["2015/2/6", "0.464063002"], ["2015/2/9", "0.49724146"], ["2015/2/10", "0.49724146"], ["2015/2/11", "0.49724146"], ["2015/2/12", "0.49724146"], ["2015/2/13", "0.547605978"], ["2015/2/16", "0.547605978"], ["2015/2/17", "0.558723477"], ["2015/2/25", "0.573858229"], ["2015/2/26", "0.546911392"], ["2015/2/27", "0.546911392"], ["2015/3/2", "0.546911392"], ["2015/3/3", "0.530848869"], ["2015/3/4", "0.530848869"], ["2015/3/5", "0.530848869"], ["2015/3/6", "0.530848869"], ["2015/3/9", "0.513643644"], ["2015/3/10", "0.513643644"], ["2015/3/11", "0.513643644"], ["2015/3/12", "0.517318735"], ["2015/3/13", "0.517318735"], ["2015/3/16", "0.492949246"], ["2015/3/17", "0.492949246"], ["2015/3/18", "0.490042112"], ["2015/3/19", "0.490042112"], ["2015/3/20", "0.525990557"], ["2015/3/23", "0.552797344"], ["2015/3/24", "0.552797344"], ["2015/3/25", "0.559668537"], ["2015/3/26", "0.559668537"], ["2015/3/27", "0.559668537"], ["2015/3/30", "0.536852775"], ["2015/3/31", "0.600557581"], ["2015/4/1", "0.577717532"], ["2015/4/2", "0.596190971"], ["2015/4/3", "0.596190971"], ["2015/4/7", "0.596190971"], ["2015/4/8", "0.596190971"], ["2015/4/9", "0.613291544"], ["2015/4/10", "0.596443542"], ["2015/4/13", "0.596443542"], ["2015/4/14", "0.596443542"], ["2015/4/15", "0.596443542"], ["2015/4/16", "0.596594776"], ["2015/4/17", "0.626260815"], ["2015/4/20", "0.633270272"], ["2015/4/21", "0.646178286"], ["2015/4/22", "0.646742938"], ["2015/4/23", "0.646742938"], ["2015/4/24", "0.654065308"], ["2015/4/27", "0.680592217"], ["2015/4/28", "0.675243934"], ["2015/4/29", "0.675243934"], ["2015/4/30", "0.675243934"], ["2015/5/4", "0.675243934"], ["2015/5/5", "0.655215252"], ["2015/5/6", "0.712683679"], ["2015/5/7", "0.712683679"], ["2015/5/8", "0.712683679"], ["2015/5/11", "0.694464546"], ["2015/5/12", "0.694464546"], ["2015/5/13", "0.694464546"], ["2015/5/14", "0.694464546"], ["2015/5/15", "0.671561512"], ["2015/5/18", "0.671561512"], ["2015/5/19", "0.651554806"], ["2015/5/20", "0.6676251"], ["2015/5/21", "0.647588591"], ["2015/5/22", "0.641614817"], ["2015/5/25", "0.621515632"], ["2015/5/26", "0.621515632"], ["2015/5/27", "0.621515632"], ["2015/5/28", "0.602714129"], ["2015/5/29", "0.72489511"], ["2015/6/1", "0.704801313"], ["2015/6/2", "0.704162533"], ["2015/6/3", "0.714687091"], ["2015/6/4", "0.694546564"], ["2015/6/5", "0.791464322"], ["2015/6/8", "0.795883181"], ["2015/6/9", "0.775713127"], ["2015/6/10", "0.757139683"], ["2015/6/11", "0.757139683"], ["2015/6/12", "0.757139683"], ["2015/6/15", "0.753150746"], ["2015/6/16", "0.745960598"], ["2015/6/17", "0.800433017"], ["2015/6/18", "0.778975788"], ["2015/6/19", "0.763368876"], ["2015/6/23", "0.740682619"], ["2015/6/24", "0.753466404"], ["2015/6/25", "0.732070238"], ["2015/6/26", "0.709408154"], ["2015/6/29", "0.789185427"], ["2015/6/30", "0.76373028"], ["2015/7/1", "0.811693018"], ["2015/7/2", "0.78620723"], ["2015/7/3", "0.759472658"], ["2015/7/6", "1.283652369"], ["2015/7/7", "1.344193036"], ["2015/7/8", "1.305981673"], ["2015/7/9", "1.265209089"], ["2015/7/10", "1.265209089"], ["2015/7/13", "1.232664779"], ["2015/7/14", "1.227121569"], ["2015/7/15", "1.19178366"], ["2015/7/16", "1.156435924"], ["2015/7/17", "1.282578642"], ["2015/7/20", "1.247226042"], ["2015/7/21", "1.241389535"], ["2015/7/22", "1.3567436"], ["2015/7/23", "1.321346809"], ["2015/7/24", "1.350162325"], ["2015/7/27", "1.313161832"], ["2015/7/28", "1.533871044"], ["2015/7/29", "1.731358769"], ["2015/7/30", "1.770445614"], ["2015/7/31", "1.929940948"], ["2015/8/3", "2.051318133"], ["2015/8/4", "2.063634707"], ["2015/8/5", "2.012553673"], ["2015/8/6", "2.138332944"], ["2015/8/7", "2.087265004"], ["2015/8/10", "2.038762245"], ["2015/8/11", "2.096083958"], ["2015/8/12", "2.096083958"], ["2015/8/13", "2.096083958"], ["2015/8/14", "2.096083958"], ["2015/8/17", "2.165570216"], ["2015/8/18", "2.1476259"], ["2015/8/19", "2.159352357"], ["2015/8/20", "2.159352357"], ["2015/8/21", "2.103831036"], ["2015/8/24", "2.081167183"], ["2015/8/25", "2.105297581"], ["2015/8/26", "2.674471424"], ["2015/8/27", "2.593615537"], ["2015/8/28", "2.518444183"], ["2015/8/31", "2.447414715"], ["2015/9/1", "2.487306972"], ["2015/9/2", "2.494201923"], ["2015/9/7", "2.424576266"], ["2015/9/8", "2.433182556"], ["2015/9/9", "2.526437237"], ["2015/9/10", "2.580429011"], ["2015/9/11", "2.580429011"], ["2015/9/14", "2.538285061"], ["2015/9/15", "2.595098133"], ["2015/9/16", "2.580620435"], ["2015/9/17", "2.580620435"], ["2015/9/18", "2.508093344"], ["2015/9/21", "2.561181617"], ["2015/9/22", "2.561181617"], ["2015/9/23", "2.516360895"], ["2015/9/24", "2.516360895"], ["2015/9/25", "2.443836414"], ["2015/9/28", "2.443836414"], ["2015/9/29", "2.480176054"], ["2015/9/30", "2.545836708"], ["2015/10/8", "2.672052449"], ["2015/10/9", "2.623963949"], ["2015/10/12", "2.583060806"], ["2015/10/13", "2.583060806"], ["2015/10/14", "2.583060806"], ["2015/10/15", "2.515847105"], ["2015/10/16", "2.515847105"], ["2015/10/19", "2.448639061"], ["2015/10/20", "2.448639061"], ["2015/10/21", "2.383052583"], ["2015/10/22", "2.427776953"], ["2015/10/23", "2.427776953"], ["2015/10/26", "2.427776953"], ["2015/10/27", "2.450860364"], ["2015/10/28", "2.457585427"], ["2015/10/29", "2.457585427"], ["2015/10/30", "2.457585427"], ["2015/11/2", "2.457585427"], ["2015/11/3", "2.457585427"], ["2015/11/4", "2.393331102"], ["2015/11/5", "2.431972661"], ["2015/11/6", "2.373363346"], ["2015/11/9", "2.439632299"], ["2015/11/10", "2.439632299"], ["2015/11/11", "2.439632299"], ["2015/11/12", "2.462095105"], ["2015/11/13", "2.462095105"], ["2015/11/16", "2.462095105"], ["2015/11/17", "2.523813561"], ["2015/11/18", "2.523813561"], ["2015/11/19", "2.500748165"], ["2015/11/20", "2.440509383"], ["2015/11/23", "2.440509383"], ["2015/11/24", "2.440509383"], ["2015/11/25", "2.440509383"], ["2015/11/26", "2.440509383"], ["2015/11/27", "2.392241419"], ["2015/11/30", "2.392241419"], ["2015/12/1", "2.392241419"], ["2015/12/2", "2.366606424"], ["2015/12/3", "2.366606424"], ["2015/12/4", "2.317730622"], ["2015/12/7", "2.317730622"], ["2015/12/8", "2.35189296"], ["2015/12/9", "2.35189296"], ["2015/12/10", "2.35189296"], ["2015/12/11", "2.35189296"], ["2015/12/14", "2.339962158"], ["2015/12/15", "2.339962158"], ["2015/12/16", "2.339962158"], ["2015/12/17", "2.363792193"], ["2015/12/18", "2.457972041"], ["2015/12/21", "2.39904853"], ["2015/12/22", "2.39904853"], ["2015/12/23", "2.39904853"], ["2015/12/24", "2.421143539"], ["2015/12/25", "2.421143539"], ["2015/12/28", "2.362242393"], ["2015/12/29", "2.362242393"], ["2015/12/30", "2.362242393"], ["2015/12/31", "2.362242393"], ["2016/1/5", "2.35946091"], ["2016/1/6", "2.297781523"], ["2016/1/8", "2.236146734"], ["2016/1/11", "2.378622496"], ["2016/1/12", "2.576924726"], ["2016/1/13", "2.63544291"], ["2016/1/14", "2.680783415"], ["2016/1/15", "2.637033629"], ["2016/1/18", "2.712027492"], ["2016/1/19", "2.634956622"], ["2016/1/20", "2.641963751"], ["2016/1/21", "2.713767204"], ["2016/1/22", "2.745220041"], ["2016/1/25", "2.745220041"], ["2016/1/26", "2.663778624"], ["2016/1/27", "3.003480467"], ["2016/1/28", "3.003480467"], ["2016/1/29", "2.91372719"], ["2016/2/1", "3.012944476"], ["2016/2/2", "3.04845425"], ["2016/2/3", "3.141258321"], ["2016/2/4", "3.141258321"], ["2016/2/5", "3.141258321"], ["2016/2/15", "3.141258321"], ["2016/2/16", "3.16217268"], ["2016/2/17", "3.16217268"], ["2016/2/18", "3.16217268"], ["2016/2/19", "3.137621845"], ["2016/2/22", "3.108268644"], ["2016/2/23", "3.108268644"], ["2016/2/24", "3.108268644"], ["2016/2/25", "3.052172814"], ["2016/2/26", "3.052172814"], ["2016/2/29", "2.95787083"], ["2016/3/1", "2.869275318"], ["2016/3/2", "2.853508357"], ["2016/3/3", "2.853508357"], ["2016/3/4", "2.853508357"], ["2016/3/7", "2.944559263"], ["2016/3/8", "2.85887894"], ["2016/3/9", "2.938118577"], ["2016/3/10", "2.938118577"], ["2016/3/11", "2.938118577"], ["2016/3/14", "2.895335635"], ["2016/3/15", "2.895335635"], ["2016/3/16", "2.895335635"], ["2016/3/17", "2.845502292"], ["2016/3/18", "2.845502292"], ["2016/3/21", "2.79140681"], ["2016/3/22", "2.79140681"], ["2016/3/23", "2.79140681"], ["2016/3/24", "2.795941674"], ["2016/3/25", "2.795941674"], ["2016/3/28", "2.795941674"], ["2016/3/29", "2.795941674"], ["2016/3/30", "2.783345376"], ["2016/3/31", "2.783345376"], ["2016/4/1", "2.783345376"], ["2016/4/5", "2.783345376"], ["2016/4/6", "2.783345376"], ["2016/4/7", "2.783345376"], ["2016/4/8", "2.783345376"], ["2016/4/11", "2.81114065"], ["2016/4/12", "2.81114065"], ["2016/4/13", "2.909286023"], ["2016/4/14", "2.909286023"], ["2016/4/15", "2.909286023"], ["2016/4/18", "2.909286023"], ["2016/4/19", "2.909286023"], ["2016/4/20", "2.853983442"], ["2016/4/21", "2.853983442"], ["2016/4/22", "2.853983442"], ["2016/4/25", "2.853983442"], ["2016/4/26", "2.853983442"], ["2016/4/27", "2.853983442"], ["2016/4/28", "2.853983442"], ["2016/4/29", "2.853983442"], ["2016/5/3", "2.853983442"], ["2016/5/4", "2.853983442"], ["2016/5/5", "2.853983442"], ["2016/5/6", "2.774009037"], ["2016/5/9", "2.774009037"], ["2016/5/10", "2.774009037"], ["2016/5/11", "2.774009037"], ["2016/5/12", "2.774009037"], ["2016/5/13", "2.774009037"], ["2016/5/16", "2.774009037"], ["2016/5/17", "2.774009037"], ["2016/5/18", "2.774009037"], ["2016/5/19", "2.774009037"], ["2016/5/20", "2.774009037"], ["2016/5/23", "2.774009037"], ["2016/5/24", "2.774009037"], ["2016/5/25", "2.774009037"], ["2016/5/26", "2.774009037"], ["2016/5/27", "2.774009037"], ["2016/5/30", "2.774009037"], ["2016/5/31", "2.695625805"], ["2016/6/1", "2.695625805"], ["2016/6/2", "2.695625805"], ["2016/6/3", "2.695625805"], ["2016/6/6", "2.695625805"], ["2016/6/7", "2.695625805"], ["2016/6/8", "2.695625805"], ["2016/6/13", "2.695625805"], ["2016/6/14", "2.695625805"], ["2016/6/15", "2.743994132"], ["2016/6/16", "2.743994132"], ["2016/6/17", "2.743994132"], ["2016/6/20", "2.664092711"], ["2016/6/21", "2.664092711"], ["2016/6/22", "2.664092711"], ["2016/6/23", "2.664092711"], ["2016/6/24", "2.793476003"], ["2016/6/27", "2.79090667"], ["2016/6/28", "2.79090667"], ["2016/6/29", "2.79090667"], ["2016/6/30", "2.79090667"], ["2016/7/1", "2.79090667"], ["2016/7/4", "2.791043619"], ["2016/7/5", "2.791043619"], ["2016/7/6", "2.791043619"], ["2016/7/7", "2.791043619"], ["2016/7/8", "2.791043619"], ["2016/7/11", "2.791043619"]]
        }, {
          name: '沪深300累计收益率曲线',
          type: 'line',
          symbol: 'none',
          data: [["2014/12/1", "0"], ["2014/12/2", "0.045989305"], ["2014/12/3", "0.063672014"], ["2014/12/4", "0.138823529"], ["2014/12/5", "0.130766488"], ["2014/12/8", "0.183957219"], ["2014/12/9", "0.118003565"], ["2014/12/10", "0.164491979"], ["2014/12/11", "0.141461676"], ["2014/12/12", "0.142673797"], ["2014/12/15", "0.158360071"], ["2014/12/16", "0.184741533"], ["2014/12/17", "0.194081996"], ["2014/12/18", "0.233796791"], ["2014/12/19", "0.249340463"], ["2014/12/22", "0.221461676"], ["2014/12/23", "0.191158645"], ["2014/12/24", "0.157789661"], ["2014/12/25", "0.196078431"], ["2014/12/26", "0.248342246"], ["2014/12/29", "0.236791444"], ["2014/12/30", "0.238645276"], ["2014/12/31", "0.273796791"], ["2015/1/5", "0.310445633"], ["2015/1/6", "0.302816399"], ["2015/1/7", "0.302602496"], ["2015/1/8", "0.271657754"], ["2015/1/9", "0.256898396"], ["2015/1/12", "0.258538324"], ["2015/1/13", "0.256470588"], ["2015/1/14", "0.252406417"], ["2015/1/15", "0.285775401"], ["2015/1/16", "0.311800357"], ["2015/1/19", "0.182245989"], ["2015/1/20", "0.21254902"], ["2015/1/21", "0.269875223"], ["2015/1/22", "0.272299465"], ["2015/1/23", "0.27885918"], ["2015/1/26", "0.292049911"], ["2015/1/27", "0.278431373"], ["2015/1/28", "0.257040998"], ["2015/1/29", "0.24285205"], ["2015/1/30", "0.228377897"], ["2015/2/2", "0.200926916"], ["2015/2/3", "0.228948307"], ["2015/2/4", "0.215686275"], ["2015/2/5", "0.2"], ["2015/2/6", "0.183244207"], ["2015/2/9", "0.19600713"], ["2015/2/10", "0.221604278"], ["2015/2/11", "0.23087344"], ["2015/2/12", "0.232798574"], ["2015/2/13", "0.23771836"], ["2015/2/16", "0.248128342"], ["2015/2/17", "0.26916221"], ["2015/2/25", "0.245846702"], ["2015/2/26", "0.285490196"], ["2015/2/27", "0.280213904"], ["2015/3/2", "0.288484848"], ["2015/3/3", "0.252263815"], ["2015/3/4", "0.263957219"], ["2015/3/5", "0.252192513"], ["2015/3/6", "0.245490196"], ["2015/3/9", "0.269447415"], ["2015/3/10", "0.258894831"], ["2015/3/11", "0.262887701"], ["2015/3/12", "0.286417112"], ["2015/3/13", "0.289910873"], ["2015/3/16", "0.32228164"], ["2015/3/17", "0.337896613"], ["2015/3/18", "0.373404635"], ["2015/3/19", "0.364278075"], ["2015/3/20", "0.386809269"], ["2015/3/23", "0.420249554"], ["2015/3/24", "0.417397504"], ["2015/3/25", "0.406203209"], ["2015/3/26", "0.405490196"], ["2015/3/27", "0.412905526"], ["2015/3/30", "0.463101604"], ["2015/3/31", "0.446417112"], ["2015/4/1", "0.472869875"], ["2015/4/2", "0.466737968"], ["2015/4/3", "0.491479501"], ["2015/4/7", "0.511515152"], ["2015/4/8", "0.519572193"], ["2015/4/9", "0.50631016"], ["2015/4/10", "0.553796791"], ["2015/4/13", "0.574901961"], ["2015/4/14", "0.578823529"], ["2015/4/15", "0.5657041"], ["2015/4/16", "0.61311943"], ["2015/4/17", "0.641853832"], ["2015/4/20", "0.612406417"], ["2015/4/21", "0.645632799"], ["2015/4/22", "0.694545455"], ["2015/4/23", "0.687771836"], ["2015/4/24", "0.679572193"], ["2015/4/27", "0.71486631"], ["2015/4/28", "0.686345811"], ["2015/4/29", "0.700891266"], ["2015/4/30", "0.694901961"], ["2015/5/4", "0.699536542"], ["2015/5/5", "0.64057041"], ["2015/5/6", "0.631657754"], ["2015/5/7", "0.612049911"], ["2015/5/8", "0.623386809"], ["2015/5/11", "0.660035651"], ["2015/5/12", "0.678074866"], ["2015/5/13", "0.667878788"], ["2015/5/14", "0.669447415"], ["2015/5/15", "0.632798574"], ["2015/5/18", "0.618253119"], ["2015/5/19", "0.688627451"], ["2015/5/20", "0.699037433"], ["2015/5/21", "0.742032086"], ["2015/5/22", "0.781247772"], ["2015/5/25", "0.847914439"], ["2015/5/26", "0.874652406"], ["2015/5/27", "0.879001783"], ["2015/5/28", "0.751158645"], ["2015/5/29", "0.753226381"], ["2015/6/1", "0.859821747"], ["2015/6/2", "0.896327986"], ["2015/6/3", "0.8514082"], ["2015/6/4", "0.862459893"], ["2015/6/5", "0.863957219"], ["2015/6/8", "0.903743316"], ["2015/6/9", "0.875508021"], ["2015/6/10", "0.875222816"], ["2015/6/11", "0.886702317"], ["2015/6/12", "0.898395722"], ["2015/6/15", "0.849982175"], ["2015/6/16", "0.808342246"], ["2015/6/17", "0.826024955"], ["2015/6/18", "0.763707665"], ["2015/6/19", "0.660677362"], ["2015/6/23", "0.697682709"], ["2015/6/24", "0.728057041"], ["2015/6/25", "0.651550802"], ["2015/6/26", "0.501746881"], ["2015/6/29", "0.418752228"], ["2015/6/30", "0.556434938"], ["2015/7/1", "0.457540107"], ["2015/7/2", "0.444848485"], ["2015/7/3", "0.39372549"], ["2015/7/6", "0.43315508"], ["2015/7/7", "0.362424242"], ["2015/7/8", "0.234723708"], ["2015/7/9", "0.35828877"], ["2015/7/10", "0.468449198"], ["2015/7/13", "0.482994652"], ["2015/7/14", "0.413618538"], ["2015/7/15", "0.361782531"], ["2015/7/16", "0.417040998"], ["2015/7/17", "0.449269162"], ["2015/7/20", "0.408413547"], ["2015/7/21", "0.409340463"], ["2015/7/22", "0.407130125"], ["2015/7/23", "0.484206774"], ["2015/7/24", "0.431229947"], ["2015/7/27", "0.300463458"], ["2015/7/28", "0.298324421"], ["2015/7/29", "0.355935829"], ["2015/7/30", "0.290695187"], ["2015/7/31", "0.308663102"], ["2015/8/3", "0.299679144"], ["2015/8/4", "0.374474153"], ["2015/8/5", "0.338538324"], ["2015/8/6", "0.341319073"], ["2015/8/7", "0.379964349"], ["2015/8/10", "0.443921569"], ["2015/8/11", "0.427379679"], ["2015/8/12", "0.417040998"], ["2015/8/13", "0.432085561"], ["2015/8/14", "0.42745098"], ["2015/8/17", "0.427308378"], ["2015/8/18", "0.323850267"], ["2015/8/19", "0.357290553"], ["2015/8/20", "0.337682709"], ["2015/8/21", "0.228805704"], ["2015/8/24", "0.116648841"], ["2015/8/25", "0.005918004"], ["2015/8/26", "-0.00855615"], ["2015/8/27", "0.064242424"], ["2015/8/28", "0.131122995"], ["2015/8/31", "0.097611408"], ["2015/9/1", "0.060463458"], ["2015/9/2", "0.056613191"], ["2015/9/7", "0.109304813"], ["2015/9/8", "0.173475936"], ["2015/9/9", "0.192085561"], ["2015/9/10", "0.176185383"], ["2015/9/11", "0.178752228"], ["2015/9/14", "0.119001783"], ["2015/9/15", "0.10973262"], ["2015/9/16", "0.173262032"], ["2015/9/17", "0.157932264"], ["2015/9/18", "0.117932264"], ["2015/9/21", "0.146024955"], ["2015/9/22", "0.150802139"], ["2015/9/23", "0.127700535"], ["2015/9/24", "0.137040998"], ["2015/9/25", "0.112156863"], ["2015/9/28", "0.121996435"], ["2015/9/29", "0.097825312"], ["2015/9/30", "0.111586453"], ["2015/10/8", "0.150588235"], ["2015/10/9", "0.175900178"], ["2015/10/12", "0.221461676"], ["2015/10/13", "0.219108734"], ["2015/10/14", "0.205632799"], ["2015/10/15", "0.237076649"], ["2015/10/16", "0.253547237"], ["2015/10/19", "0.205561497"], ["2015/10/20", "0.221675579"], ["2015/10/21", "0.190374332"], ["2015/10/22", "0.217112299"], ["2015/10/23", "0.231016043"], ["2015/10/26", "0.235579323"], ["2015/10/27", "0.241497326"], ["2015/10/28", "0.218395722"], ["2015/10/29", "0.221675579"], ["2015/10/30", "0.224456328"], ["2015/11/2", "0.210053476"], ["2015/11/3", "0.2057041"], ["2015/11/4", "0.274937611"], ["2015/11/5", "0.296042781"], ["2015/11/6", "0.335115865"], ["2015/11/9", "0.350017825"], ["2015/11/10", "0.346951872"], ["2015/11/11", "0.349803922"], ["2015/11/12", "0.338894831"], ["2015/11/13", "0.326417112"], ["2015/11/16", "0.33311943"], ["2015/11/17", "0.323778966"], ["2015/11/18", "0.318502674"], ["2015/11/19", "0.345454545"], ["2015/11/20", "0.299108734"], ["2015/11/23", "0.292691622"], ["2015/11/24", "0.299821747"], ["2015/11/25", "0.311586453"], ["2015/11/26", "0.309304813"], ["2015/11/27", "0.243778966"], ["2015/11/30", "0.243636364"], ["2015/12/1", "0.253832442"], ["2015/12/2", "0.305668449"], ["2015/12/3", "0.316791444"], ["2015/12/4", "0.292192513"], ["2015/12/7", "0.295115865"], ["2015/12/8", "0.274723708"], ["2015/12/9", "0.281069519"], ["2015/12/10", "0.274153298"], ["2015/12/11", "0.279786096"], ["2015/12/14", "0.321426025"], ["2015/12/15", "0.311301248"], ["2015/12/16", "0.312727273"], ["2015/12/17", "0.336684492"], ["2015/12/18", "0.319144385"], ["2015/12/21", "0.356149733"], ["2015/12/22", "0.356934046"], ["2015/12/23", "0.356506239"], ["2015/12/24", "0.346096257"], ["2015/12/25", "0.353297683"], ["2015/12/28", "0.307950089"], ["2015/12/29", "0.321354724"], ["2015/12/30", "0.320855615"], ["2015/12/31", "0.304812834"], ["2016/1/5", "0.215258467"], ["2016/1/6", "0.235294118"], ["2016/1/8", "0.179679144"], ["2016/1/11", "0.123636364"], ["2016/1/12", "0.139607843"], ["2016/1/13", "0.12399287"], ["2016/1/14", "0.142459893"], ["2016/1/15", "0.116862745"], ["2016/1/18", "0.084491979"], ["2016/1/19", "0.117290553"], ["2016/1/20", "0.095900178"], ["2016/1/21", "0.073440285"], ["2016/1/22", "0.084491979"], ["2016/1/25", "0.085276292"], ["2016/1/26", "0.033511586"], ["2016/1/27", "0.022317291"], ["2016/1/28", "0.004206774"], ["2016/1/29", "0.035222816"], ["2016/2/1", "0.028092692"], ["2016/2/2", "0.051265597"], ["2016/2/3", "0.047914439"], ["2016/2/4", "0.061960784"], ["2016/2/5", "0.047130125"], ["2016/2/15", "0.044491979"], ["2016/2/16", "0.07543672"], ["2016/2/17", "0.085775401"], ["2016/2/18", "0.087557932"], ["2016/2/19", "0.062673797"], ["2016/2/22", "0.084491979"], ["2016/2/23", "0.077504456"], ["2016/2/24", "0.083707665"], ["2016/2/25", "0.014973262"], ["2016/2/26", "0.026737968"], ["2016/2/29", "-0.0057041"], ["2016/3/1", "0.021105169"], ["2016/3/2", "0.072727273"], ["2016/3/3", "0.07258467"], ["2016/3/4", "0.088199643"], ["2016/3/7", "0.099393939"], ["2016/3/8", "0.096399287"], ["2016/3/9", "0.07543672"], ["2016/3/10", "0.063458111"], ["2016/3/11", "0.064741533"], ["2016/3/14", "0.084491979"], ["2016/3/15", "0.086131907"], ["2016/3/16", "0.091622103"], ["2016/3/17", "0.113368984"], ["2016/3/18", "0.114081996"], ["2016/3/21", "0.144456328"], ["2016/3/22", "0.138894831"], ["2016/3/23", "0.139393939"], ["2016/3/24", "0.12114082"], ["2016/3/25", "0.127557932"], ["2016/3/28", "0.115793226"], ["2016/3/29", "0.106595365"], ["2016/3/30", "0.137254902"], ["2016/3/31", "0.137611408"], ["2016/4/1", "0.143172906"], ["2016/4/5", "0.15372549"], ["2016/4/6", "0.15486631"], ["2016/4/7", "0.141818182"], ["2016/4/8", "0.13368984"], ["2016/4/11", "0.14573975"], ["2016/4/12", "0.14631016"], ["2016/4/13", "0.159215686"], ["2016/4/14", "0.165490196"], ["2016/4/15", "0.154224599"], ["2016/4/18", "0.137825312"], ["2016/4/19", "0.138181818"], ["2016/4/20", "0.110445633"], ["2016/4/21", "0.110516934"], ["2016/4/22", "0.119857398"], ["2016/4/25", "0.115008913"], ["2016/4/26", "0.120499109"], ["2016/4/27", "0.114367201"], ["2016/4/28", "0.112727273"], ["2016/4/29", "0.115151515"], ["2016/5/3", "0.140819964"], ["2016/5/4", "0.136613191"], ["2016/5/5", "0.138181818"], ["2016/5/6", "0.101033868"], ["2016/5/9", "0.077361854"], ["2016/5/10", "0.082067736"], ["2016/5/11", "0.088199643"], ["2016/5/12", "0.093262032"], ["2016/5/13", "0.093761141"], ["2016/5/16", "0.098894831"], ["2016/5/17", "0.098538324"], ["2016/5/18", "0.090409982"], ["2016/5/19", "0.089554367"], ["2016/5/20", "0.08171123"], ["2016/5/23", "0.084848485"], ["2016/5/24", "0.079714795"], ["2016/5/25", "0.077219251"], ["2016/5/26", "0.078787879"], ["2016/5/27", "0.081497326"], ["2016/5/30", "0.082566845"], ["2016/5/31", "0.126131907"], ["2016/6/1", "0.116506239"], ["2016/6/2", "0.117789661"], ["2016/6/3", "0.132762923"], ["2016/6/6", "0.125632799"], ["2016/6/7", "0.126559715"], ["2016/6/8", "0.12228164"], ["2016/6/13", "0.079786096"], ["2016/6/14", "0.087486631"], ["2016/6/15", "0.10516934"], ["2016/6/16", "0.100891266"], ["2016/6/17", "0.109946524"], ["2016/6/20", "0.087058824"], ["2016/6/21", "0.082994652"], ["2016/6/22", "0.096613191"], ["2016/6/23", "0.091479501"], ["2016/6/24", "0.074224599"], ["2016/6/27", "0.097326203"], ["2016/6/28", "0.103030303"], ["2016/6/29", "0.109090909"], ["2016/6/30", "0.10916221"], ["2016/7/1", "0.105525847"], ["2016/7/4", "0.130124777"], ["2016/7/5", "0.131122995"], ["2016/7/6", "0.135187166"], ["2016/7/7", "0.135686275"], ["2016/7/8", "0.130623886"], ["2016/7/11", "0.132477718"]]
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'analysispage-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u8D44\u4EA7\u5206\u6790',
          showMenuIconButton: false
        }),
        _react2.default.createElement('div', { id: 'account_analysis-wrapper1' }),
        _react2.default.createElement('div', { id: 'account_analysis-wrapper2' }),
        _react2.default.createElement(_FooterComponent2.default, { index: 3 })
      );
    }
  }]);

  return AnalysisPageComponent;
}(_react2.default.Component);

AnalysisPageComponent.displayName = 'AccountAnalysisPageComponent';

// Uncomment properties you need
// AnalysisPageComponent.propTypes = {};
// AnalysisPageComponent.defaultProps = {};

exports.default = AnalysisPageComponent;

//[["2014/12/1", "0.017243872"], ["2014/12/2", "-0.001038415"], ["2014/12/3", "-0.019337059"], ["2014/12/4", "-0.013813258"], ["2014/12/5", "0.037755078"], ["2014/12/8", "0.023977003"], ["2014/12/9", "0.07184109"], ["2014/12/10", "0.099691386"], ["2014/12/11", "0.081325513"], ["2014/12/12", "0.10003335"], ["2014/12/15", "0.115446421"], ["2014/12/16", "0.121699349"], ["2014/12/17", "0.121699349"], ["2014/12/18", "0.103281813"], ["2014/12/19", "0.174160785"], ["2014/12/22", "0.18786782"], ["2014/12/23", "0.169453748"], ["2014/12/24", "0.151050822"], ["2014/12/25", "0.158722127"], ["2014/12/26", "0.140314916"], ["2014/12/29", "0.138810647"], ["2014/12/30", "0.183073257"], ["2014/12/31", "0.164630846"], ["2015/1/5", "0.176509135"], ["2015/1/6", "0.194515006"], ["2015/1/7", "0.194515006"], ["2015/1/8", "0.204312963"], ["2015/1/9", "0.280569366"], ["2015/1/12", "0.280569366"], ["2015/1/13", "0.280569366"], ["2015/1/14", "0.280569366"], ["2015/1/15", "0.26211124"], ["2015/1/16", "0.243641046"], ["2015/1/19", "0.225196267"], ["2015/1/20", "0.206761924"], ["2015/1/21", "0.188317075"], ["2015/1/22", "0.188317075"], ["2015/1/23", "0.211584971"], ["2015/1/26", "0.211584971"], ["2015/1/27", "0.193125058"], ["2015/1/28", "0.197502012"], ["2015/1/29", "0.197502012"], ["2015/1/30", "0.197502012"], ["2015/2/2", "0.21076078"], ["2015/2/3", "0.192344497"], ["2015/2/4", "0.192344497"], ["2015/2/5", "0.250091682"], ["2015/2/6", "0.266781495"], ["2015/2/9", "0.290135983"], ["2015/2/10", "0.290135983"], ["2015/2/11", "0.290135983"], ["2015/2/12", "0.290135983"], ["2015/2/13", "0.329602865"], ["2015/2/16", "0.329602865"], ["2015/2/17", "0.329548105"], ["2015/2/25", "0.341683813"], ["2015/2/26", "0.323238868"], ["2015/2/27", "0.323238868"], ["2015/3/2", "0.323238868"], ["2015/3/3", "0.323238868"], ["2015/3/4", "0.323238868"], ["2015/3/5", "0.323238868"], ["2015/3/6", "0.323238868"], ["2015/3/9", "0.323238868"], ["2015/3/10", "0.323238868"], ["2015/3/11", "0.323238868"], ["2015/3/12", "0.32661721"], ["2015/3/13", "0.32661721"], ["2015/3/16", "0.308141225"], ["2015/3/17", "0.308141225"], ["2015/3/18", "0.300302281"], ["2015/3/19", "0.300302281"], ["2015/3/20", "0.323313468"], ["2015/3/23", "0.337724807"], ["2015/3/24", "0.337724807"], ["2015/3/25", "0.355247987"], ["2015/3/26", "0.355247987"], ["2015/3/27", "0.355247987"], ["2015/3/30", "0.336688934"], ["2015/3/31", "0.371760629"], ["2015/4/1", "0.353177677"], ["2015/4/2", "0.373966871"], ["2015/4/3", "0.373966871"], ["2015/4/7", "0.373966871"], ["2015/4/8", "0.373966871"], ["2015/4/9", "0.393212906"], ["2015/4/10", "0.37459054"], ["2015/4/13", "0.37459054"], ["2015/4/14", "0.37459054"], ["2015/4/15", "0.37459054"], ["2015/4/16", "0.360481794"], ["2015/4/17", "0.377305228"], ["2015/4/20", "0.36328445"], ["2015/4/21", "0.369617751"], ["2015/4/22", "0.382785069"], ["2015/4/23", "0.382785069"], ["2015/4/24", "0.368744867"], ["2015/4/27", "0.390368661"], ["2015/4/28", "0.37630967"], ["2015/4/29", "0.37630967"], ["2015/4/30", "0.37630967"], ["2015/5/4", "0.37630967"], ["2015/5/5", "0.362256489"], ["2015/5/6", "0.410881076"], ["2015/5/7", "0.410881076"], ["2015/5/8", "0.410881076"], ["2015/5/11", "0.396848052"], ["2015/5/12", "0.396848052"], ["2015/5/13", "0.396848052"], ["2015/5/14", "0.396848052"], ["2015/5/15", "0.382820131"], ["2015/5/18", "0.382820131"], ["2015/5/19", "0.368787638"], ["2015/5/20", "0.354738782"], ["2015/5/21", "0.340688339"], ["2015/5/22", "0.340051054"], ["2015/5/25", "0.325948019"], ["2015/5/26", "0.325948019"], ["2015/5/27", "0.325948019"], ["2015/5/28", "0.311837017"], ["2015/5/29", "0.384112955"], ["2015/6/1", "0.370022114"], ["2015/6/2", "0.366476686"], ["2015/6/3", "0.369217737"], ["2015/6/4", "0.35508786"], ["2015/6/5", "0.340950886"], ["2015/6/8", "0.339890318"], ["2015/6/9", "0.325749919"], ["2015/6/10", "0.311601993"], ["2015/6/11", "0.311601993"], ["2015/6/12", "0.311601993"], ["2015/6/15", "0.297464073"], ["2015/6/16", "0.297489929"], ["2015/6/17", "0.385555057"], ["2015/6/18", "0.371441828"], ["2015/6/19", "0.371301187"], ["2015/6/23", "0.357254499"], ["2015/6/24", "0.36094925"], ["2015/6/25", "0.346883103"], ["2015/6/26", "0.332842035"], ["2015/6/29", "0.382253122"], ["2015/6/30", "0.36377886"], ["2015/7/1", "0.415381573"], ["2015/7/2", "0.396881927"], ["2015/7/3", "0.378416417"], ["2015/7/6", "0.744770509"], ["2015/7/7", "0.791823835"], ["2015/7/8", "0.764162254"], ["2015/7/9", "0.736520578"], ["2015/7/10", "0.736520578"], ["2015/7/13", "0.713293427"], ["2015/7/14", "0.690086445"], ["2015/7/15", "0.66690764"], ["2015/7/16", "0.643723361"], ["2015/7/17", "0.79098093"], ["2015/7/20", "0.767788201"], ["2015/7/21", "0.767044015"], ["2015/7/22", "0.840359331"], ["2015/7/23", "0.817162066"], ["2015/7/24", "0.86071741"], ["2015/7/27", "0.837507891"], ["2015/7/28", "1.000833811"], ["2015/7/29", "1.213079023"], ["2015/7/30", "1.213344085"], ["2015/7/31", "1.21727867"], ["2015/8/3", "1.328169032"], ["2015/8/4", "1.338639316"], ["2015/8/5", "1.306272366"], ["2015/8/6", "1.452192939"], ["2015/8/7", "1.419799621"], ["2015/8/10", "1.38738504"], ["2015/8/11", "1.431342484"], ["2015/8/12", "1.431342484"], ["2015/8/13", "1.431342484"], ["2015/8/14", "1.431342484"], ["2015/8/17", "1.530239941"], ["2015/8/18", "1.493258494"], ["2015/8/19", "1.596234241"], ["2015/8/20", "1.596234241"], ["2015/8/21", "1.554775298"], ["2015/8/24", "1.513378132"], ["2015/8/25", "1.467583852"], ["2015/8/26", "1.964290935"], ["2015/8/27", "1.909517325"], ["2015/8/28", "1.859189465"], ["2015/8/31", "1.808845886"], ["2015/9/1", "1.758534743"], ["2015/9/2", "1.758302893"], ["2015/9/7", "1.707880333"], ["2015/9/8", "1.716570092"], ["2015/9/9", "1.81412509"], ["2015/9/10", "1.863723307"], ["2015/9/11", "1.863723307"], ["2015/9/14", "1.863723307"], ["2015/9/15", "1.917179217"], ["2015/9/16", "1.917179217"], ["2015/9/17", "1.917179217"], ["2015/9/18", "1.866688571"], ["2015/9/21", "1.922924268"], ["2015/9/22", "1.922924268"], ["2015/9/23", "1.872428054"], ["2015/9/24", "1.872428054"], ["2015/9/25", "1.821948341"], ["2015/9/28", "1.821948341"], ["2015/9/29", "1.841720507"], ["2015/9/30", "1.878662676"], ["2015/10/8", "1.964312496"], ["2015/10/9", "1.913856956"], ["2015/10/12", "1.913856956"], ["2015/10/13", "1.913856956"], ["2015/10/14", "1.913856956"], ["2015/10/15", "1.867855513"], ["2015/10/16", "1.867855513"], ["2015/10/19", "1.821856613"], ["2015/10/20", "1.821856613"], ["2015/10/21", "1.775879029"], ["2015/10/22", "1.812596518"], ["2015/10/23", "1.812596518"], ["2015/10/26", "1.812596518"], ["2015/10/27", "1.858686958"], ["2015/10/28", "1.812636172"], ["2015/10/29", "1.812636172"], ["2015/10/30", "1.812636172"], ["2015/11/2", "1.812636172"], ["2015/11/3", "1.812636172"], ["2015/11/4", "1.766575748"], ["2015/11/5", "1.724963622"], ["2015/11/6", "1.683335084"], ["2015/11/9", "1.759756766"], ["2015/11/10", "1.759756766"], ["2015/11/11", "1.759756766"], ["2015/11/12", "1.802882379"], ["2015/11/13", "1.802882379"], ["2015/11/16", "1.802882379"], ["2015/11/17", "1.852520456"], ["2015/11/18", "1.852520456"], ["2015/11/19", "1.827601724"], ["2015/11/20", "1.7859899"], ["2015/11/23", "1.7859899"], ["2015/11/24", "1.7859899"], ["2015/11/25", "1.7859899"], ["2015/11/26", "1.7859899"], ["2015/11/27", "1.74440027"], ["2015/11/30", "1.74440027"], ["2015/12/1", "1.74440027"], ["2015/12/2", "1.745117289"], ["2015/12/3", "1.745117289"], ["2015/12/4", "1.703572184"], ["2015/12/7", "1.703572184"], ["2015/12/8", "1.768296859"], ["2015/12/9", "1.768296859"], ["2015/12/10", "1.768296859"], ["2015/12/11", "1.768296859"], ["2015/12/14", "1.768296859"], ["2015/12/15", "1.768296859"], ["2015/12/16", "1.768296859"], ["2015/12/17", "1.773238952"], ["2015/12/18", "1.840452963"], ["2015/12/21", "1.798831374"], ["2015/12/22", "1.798831374"], ["2015/12/23", "1.798831374"], ["2015/12/24", "1.841221393"], ["2015/12/25", "1.841221393"], ["2015/12/28", "1.799604809"], ["2015/12/29", "1.799604809"], ["2015/12/30", "1.799604809"], ["2015/12/31", "1.799604809"], ["2016/1/5", "1.753578791"], ["2016/1/6", "1.712027795"], ["2016/1/8", "1.666006457"], ["2016/1/11", "1.788201774"], ["2016/1/12", "1.857353948"], ["2016/1/13", "1.879061006"], ["2016/1/14", "1.942152406"], ["2016/1/15", "1.906243369"], ["2016/1/18", "1.915237959"], ["2016/1/19", "1.864809768"], ["2016/1/20", "1.814390397"], ["2016/1/21", "1.929668378"], ["2016/1/22", "1.98238603"], ["2016/1/25", "1.98238603"], ["2016/1/26", "1.927510175"], ["2016/1/27", "1.872688431"], ["2016/1/28", "1.872688431"], ["2016/1/29", "1.817845699"], ["2016/2/1", "1.887756795"], ["2016/2/2", "1.944539751"], ["2016/2/3", "2.000184768"], ["2016/2/4", "2.000184768"], ["2016/2/5", "2.000184768"], ["2016/2/15", "2.000184768"], ["2016/2/16", "2.009630768"], ["2016/2/17", "2.009630768"], ["2016/2/18", "2.009630768"], ["2016/2/19", "1.991642936"], ["2016/2/22", "1.936674629"], ["2016/2/23", "1.936674629"], ["2016/2/24", "1.936674629"], ["2016/2/25", "1.881730007"], ["2016/2/26", "1.881730007"], ["2016/2/29", "1.826850909"], ["2016/3/1", "1.771951633"], ["2016/3/2", "1.771951633"], ["2016/3/3", "1.771951633"], ["2016/3/4", "1.771951633"], ["2016/3/7", "1.832993769"], ["2016/3/8", "1.782582737"], ["2016/3/9", "1.788073563"], ["2016/3/10", "1.788073563"], ["2016/3/11", "1.788073563"], ["2016/3/14", "1.737667263"], ["2016/3/15", "1.737667263"], ["2016/3/16", "1.737667263"], ["2016/3/17", "1.691734832"], ["2016/3/18", "1.691734832"], ["2016/3/21", "1.676401814"], ["2016/3/22", "1.676401814"], ["2016/3/23", "1.676401814"], ["2016/3/24", "1.681959921"], ["2016/3/25", "1.681959921"], ["2016/3/28", "1.681959921"], ["2016/3/29", "1.681959921"], ["2016/3/30", "1.686173183"], ["2016/3/31", "1.686173183"], ["2016/4/1", "1.686173183"], ["2016/4/5", "1.686173183"], ["2016/4/6", "1.686173183"], ["2016/4/7", "1.686173183"], ["2016/4/8", "1.686173183"], ["2016/4/11", "1.73049864"], ["2016/4/12", "1.73049864"], ["2016/4/13", "1.77594804"], ["2016/4/14", "1.77594804"], ["2016/4/15", "1.77594804"], ["2016/4/18", "1.77594804"], ["2016/4/19", "1.77594804"], ["2016/4/20", "1.725536281"], ["2016/4/21", "1.725536281"], ["2016/4/22", "1.725536281"], ["2016/4/25", "1.725536281"], ["2016/4/26", "1.725536281"], ["2016/4/27", "1.725536281"], ["2016/4/28", "1.725536281"], ["2016/4/29", "1.725536281"], ["2016/5/3", "1.725536281"], ["2016/5/4", "1.725536281"], ["2016/5/5", "1.725536281"], ["2016/5/6", "1.67961828"], ["2016/5/9", "1.67961828"], ["2016/5/10", "1.67961828"], ["2016/5/11", "1.67961828"], ["2016/5/12", "1.67961828"], ["2016/5/13", "1.67961828"], ["2016/5/16", "1.67961828"], ["2016/5/17", "1.67961828"], ["2016/5/18", "1.67961828"], ["2016/5/19", "1.67961828"], ["2016/5/20", "1.67961828"], ["2016/5/23", "1.67961828"], ["2016/5/24", "1.67961828"], ["2016/5/25", "1.67961828"], ["2016/5/26", "1.67961828"], ["2016/5/27", "1.67961828"], ["2016/5/30", "1.67961828"], ["2016/5/31", "1.633704712"], ["2016/6/1", "1.633704712"], ["2016/6/2", "1.633704712"], ["2016/6/3", "1.633704712"], ["2016/6/6", "1.633704712"], ["2016/6/7", "1.633704712"], ["2016/6/8", "1.633704712"], ["2016/6/13", "1.633704712"], ["2016/6/14", "1.633704712"], ["2016/6/15", "1.667767374"], ["2016/6/16", "1.667767374"], ["2016/6/17", "1.667767374"], ["2016/6/20", "1.621924157"], ["2016/6/21", "1.621924157"], ["2016/6/22", "1.621924157"], ["2016/6/23", "1.621924157"], ["2016/6/24", "1.701244721"], ["2016/6/27", "1.695166415"], ["2016/6/28", "1.695166415"], ["2016/6/29", "1.695166415"], ["2016/6/30", "1.695166415"], ["2016/7/1", "1.695166415"], ["2016/7/4", "1.69029852"], ["2016/7/5", "1.69029852"], ["2016/7/6", "1.69029852"], ["2016/7/7", "1.69029852"], ["2016/7/8", "1.69029852"], ["2016/7/11", "1.69029852"]]

//# sourceMappingURL=AnalysisPageComponent-compiled.js.map