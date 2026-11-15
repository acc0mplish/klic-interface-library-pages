#!/usr/bin/env bun

// dist/chart-types.mjs
var channel = (name, kind, required = true) => ({ name, kind, required });
var cart = (id, x = "categorical", extra = [], options = {}) => ({ id, family: "cartesian", channels: [channel("x", x), channel("y", "quantitative"), ...extra], options });
var distribution = (id, extra = [], options = {}) => ({ id, family: "distribution", channels: [channel("value", "quantitative"), channel("group", "categorical", false), ...extra], options });
var part = (id, extra = [], options = {}) => ({ id, family: "composition", channels: [channel("category", "categorical"), channel("value", "quantitative"), ...extra], options });
var entries = [
  cart("bar", "categorical", [], { orientation: { enum: ["vertical", "horizontal"] }, sort: { enum: ["input", "ascending", "descending"] } }),
  cart("grouped-bar", "categorical", [channel("series", "categorical", false)], { orientation: { enum: ["vertical", "horizontal"] }, stack: { enum: ["grouped", "stacked", "percent"] } }),
  cart("stacked-bar", "categorical", [channel("series", "categorical")], { orientation: { enum: ["vertical", "horizontal"] }, stack: { enum: ["stacked", "percent"] } }),
  cart("line", "temporal", [channel("series", "categorical", false)]),
  cart("area", "temporal", [channel("series", "categorical", false)]),
  cart("stacked-area", "temporal", [channel("series", "categorical")]),
  cart("streamgraph", "temporal", [channel("series", "categorical")]),
  cart("combo", "temporal", [channel("y2", "quantitative", false), channel("series", "categorical", false)]),
  cart("scatter", "quantitative", [channel("series", "categorical", false), channel("size", "quantitative", false)]),
  cart("bubble", "quantitative", [channel("size", "quantitative")]),
  cart("connected-scatter", "quantitative", [channel("series", "categorical", false)]),
  cart("marginal", "quantitative", [channel("series", "categorical", false)]),
  cart("regression", "quantitative", [channel("series", "categorical", false)]),
  { id: "calibration", family: "cartesian", channels: [channel("x", "quantitative"), channel("y", "quantitative")] },
  cart("lollipop", "categorical"),
  { id: "dumbbell", family: "cartesian", channels: [channel("x", "categorical"), channel("start", "quantitative"), channel("end", "quantitative")] },
  cart("slope", "ordinal", [channel("series", "categorical")]),
  cart("bump", "ordinal", [channel("series", "categorical")]),
  cart("range-area", "temporal", [channel("low", "quantitative"), channel("high", "quantitative")]),
  cart("forecast-fan", "temporal", [channel("low", "quantitative"), channel("high", "quantitative")]),
  { id: "candlestick", family: "cartesian", channels: [channel("x", "temporal"), channel("open", "quantitative"), channel("high", "quantitative"), channel("low", "quantitative"), channel("close", "quantitative")] },
  cart("drawdown", "temporal"),
  { id: "bullet", family: "cartesian", channels: [channel("x", "categorical"), channel("y", "quantitative"), channel("target", "quantitative"), channel("low", "quantitative", false), channel("high", "quantitative", false)] },
  { id: "pyramid", family: "cartesian", channels: [channel("x", "categorical"), channel("y", "quantitative"), channel("side", "categorical")] },
  { id: "ranged-dot", family: "cartesian", channels: [channel("x", "categorical"), channel("low", "quantitative"), channel("high", "quantitative"), channel("point", "quantitative", false)] },
  distribution("histogram", [], { bins: { integer: true, min: 2, max: 80 } }),
  distribution("density"),
  distribution("ecdf"),
  distribution("box-plot"),
  distribution("violin"),
  distribution("strip-plot"),
  distribution("beeswarm"),
  distribution("ridgeline"),
  part("pie"),
  part("donut"),
  part("radial"),
  part("rose"),
  { id: "gauge", family: "composition", channels: [channel("value", "quantitative"), channel("target", "quantitative", false)], options: { min: { number: true }, max: { number: true } } },
  { id: "treemap", family: "composition", channels: [channel("path", "categorical"), channel("value", "quantitative")] },
  { id: "sunburst", family: "composition", channels: [channel("path", "categorical"), channel("value", "quantitative")] },
  { id: "kpi-card", family: "composition", channels: [channel("label", "categorical"), channel("value", "quantitative"), channel("delta", "quantitative", false)] },
  { id: "waterfall", family: "composition", channels: [channel("category", "categorical"), channel("delta", "quantitative")], options: { totalField: { type: "string" } } },
  { id: "funnel", family: "composition", channels: [channel("stage", "ordinal"), channel("value", "quantitative")] },
  { id: "heatmap", family: "matrix", channels: [channel("x", "categorical"), channel("y", "categorical"), channel("value", "quantitative")] },
  { id: "correlation-matrix", family: "matrix", channels: [channel("x", "categorical"), channel("y", "categorical"), channel("value", "quantitative")] },
  { id: "cohort-heatmap", family: "matrix", channels: [channel("cohort", "categorical"), channel("period", "ordinal"), channel("value", "quantitative")] },
  { id: "calendar-heatmap", family: "matrix", channels: [channel("date", "temporal"), channel("value", "quantitative")] },
  { id: "gantt", family: "timeline", channels: [channel("task", "categorical"), channel("start", "temporal"), channel("end", "temporal"), channel("group", "categorical", false)] },
  { id: "state-timeline", family: "timeline", channels: [channel("state", "categorical"), channel("start", "temporal"), channel("end", "temporal")] },
  { id: "sankey", family: "flow", channels: [channel("source", "categorical"), channel("target", "categorical"), channel("value", "quantitative")] },
  { id: "network-graph", family: "flow", channels: [channel("source", "categorical"), channel("target", "categorical"), channel("weight", "quantitative", false)] },
  { id: "tree", family: "flow", channels: [channel("parent", "categorical"), channel("child", "categorical")] },
  { id: "parallel-coordinates", family: "cartesian", channels: [channel("dimension1", "quantitative"), channel("dimension2", "quantitative"), channel("dimension3", "quantitative"), ...Array.from({ length: 5 }, (_, index) => channel(`dimension${index + 4}`, "quantitative", false))], options: { dimensions: { stringArray: true, min: 3, max: 8 } } },
  { id: "map", family: "spatial", channels: [channel("region", "categorical")] },
  { id: "choropleth", family: "spatial", channels: [channel("region", "categorical"), channel("value", "quantitative")] },
  { id: "sparkline", family: "table", channels: [channel("x", "temporal"), channel("value", "quantitative"), channel("series", "categorical", false)] },
  { id: "bar-table", family: "table", channels: [channel("x", "categorical"), channel("y", "quantitative")] },
  { id: "radar", family: "polar", channels: [channel("axis", "categorical"), channel("value", "quantitative"), channel("series", "categorical", false)] },
  { id: "market-depth", family: "market", channels: [channel("side", "categorical"), channel("price", "quantitative"), channel("quantity", "quantitative")] },
  { id: "orderbook", family: "market", channels: [channel("side", "categorical"), channel("price", "quantitative"), channel("quantity", "quantitative"), channel("cumulative", "quantitative", false)] }
];
for (const item of entries) {
  if (["line", "area", "stacked-area", "streamgraph", "sparkline", "connected-scatter", "bump", "slope"].includes(item.id)) {
    const x = item.channels.find((channel) => channel.name === "x");
    if (x)
      x.kinds = ["categorical", "ordinal", "quantitative", "temporal"];
  }
}
var EXAMPLE_TYPES = {
  "chart-distribution": "histogram",
  "chart-violin": "violin",
  "chart-beeswarm": "beeswarm",
  "chart-scatter-brush": "scatter",
  "chart-calibration": "calibration",
  "chart-candlestick": "candlestick",
  "chart-forecast-fan": "forecast-fan",
  "chart-drawdown": "drawdown",
  "chart-market-depth": "market-depth",
  "chart-orderbook": "orderbook",
  "chart-state-timeline": "state-timeline",
  "chart-spark-table": "sparkline",
  "chart-waterfall": "waterfall",
  "chart-treemap": "treemap",
  "chart-streamgraph": "streamgraph",
  "daily-active-users-area": "stacked-area",
  "cloud-spend-variance-bar": "grouped-bar",
  "chart-dumbbell": "dumbbell",
  "chart-correlation": "correlation-matrix",
  "chart-cohort-retention": "cohort-heatmap",
  "chart-calendar-heatmap": "calendar-heatmap",
  "self-serve-funnel": "funnel",
  "chart-bullet": "bullet"
};
var makeGuide = (titleKo, titleEn, useKo, useEn, avoidKo, avoidEn, takeKo, takeEn) => ({ title: { ko: titleKo, en: titleEn }, useWhen: { ko: useKo, en: useEn }, avoidWhen: { ko: avoidKo, en: avoidEn }, takeaway: { ko: takeKo, en: takeEn } });
var genericGuides = {
  cartesian: makeGuide("직교 비교 차트", "Cartesian comparison chart", "공통 축에서 범주·시간·수치를 비교할 때 사용합니다.", "Use to compare categories, time, or measures on a shared axis.", "단위가 다르거나 0 기준의 의미가 다른 값을 같은 축에 놓지 않습니다.", "Do not place incompatible units or baselines on one axis.", "위치와 길이가 지정한 채널 값을 나타냅니다.", "Position and length encode the assigned channels."),
  distribution: makeGuide("분포 차트", "Distribution chart", "관측값의 분포·밀도·표본 차이를 확인할 때 사용합니다.", "Use to inspect distribution, density, or sample differences.", "표본 수와 구간·밀도 추정 방법을 숨기지 않습니다.", "Do not hide sample counts or bin and density assumptions.", "표는 계산된 요약과 원자료를 같은 plot data에서 제공합니다.", "The table exposes computed summaries and source values from the same plot data."),
  composition: makeGuide("구성 차트", "Composition chart", "전체 구성·단계 누계·계층 값을 비교할 때 사용합니다.", "Use to compare parts, cumulative steps, or hierarchical values.", "작은 면적 차이만으로 정밀한 순위를 주장하지 않습니다.", "Do not claim precise ranking from small area differences.", "표에서 각 구성 값과 변환 결과를 확인합니다.", "Inspect component values and transformations in the table."),
  matrix: makeGuide("행렬 차트", "Matrix chart", "두 범주 축의 교차 값이나 날짜별 밀도를 탐색할 때 사용합니다.", "Use to inspect values across two categorical axes or dates.", "결측값을 관측된 0으로 표시하지 않습니다.", "Do not encode missing values as observed zero.", "각 셀의 수치는 표에서 색상과 별도로 읽을 수 있습니다.", "Read each cell value in the table independently of color."),
  flow: makeGuide("관계·흐름 차트", "Relationship and flow chart", "항목 사이의 연결·흐름·계층 구조를 설명할 때 사용합니다.", "Use to explain links, flows, or hierarchy between items.", "연결 폭이나 경로를 실제 수치로 오해할 수 있게 표현하지 않습니다.", "Do not imply link widths or paths represent measurements they do not encode.", "표는 모든 연결 쌍과 사용한 값을 제공합니다.", "The table lists every link pair and its encoded value."),
  spatial: makeGuide("공간 차트", "Spatial chart", "지역 경계와 연결된 수치를 지도 형태로 비교할 때 사용합니다.", "Use to compare measures attached to geographic regions.", "경계 데이터 출처와 결측 지역을 숨기지 않습니다.", "Do not hide boundary provenance or regions without values.", "지역 경계와 색상은 KLIC SVG에서 로컬로 렌더링합니다.", "Regions and fills render locally as KLIC SVG."),
  timeline: makeGuide("시간 구간 차트", "Timeline chart", "작업·상태의 시작, 종료, 지속 시간을 비교할 때 사용합니다.", "Use to compare task or state start, end, and duration.", "시간대가 다르거나 끝나지 않은 구간을 임의로 확정하지 않습니다.", "Do not conflate time zones or invent end times for open intervals.", "가로 위치와 폭은 같은 시간 축을 사용합니다.", "Position and width use the same time axis."),
  polar: makeGuide("방사형 비교 차트", "Radial comparison chart", "여러 범주 축의 상대 값을 함께 살펴볼 때 사용합니다.", "Use to inspect relative measures across several category axes.", "각도와 면적을 정밀한 순위 비교로 해석하지 않습니다.", "Do not interpret angle or area as precise rank comparisons.", "정확한 값은 표와 축 이름으로 확인합니다.", "Read exact values with their axis labels in the table."),
  market: makeGuide("시장 깊이 차트", "Market depth chart", "가격 단계별 매수·매도 수량을 비교할 때 사용합니다.", "Use to compare bid and ask quantities by price level.", "합성 값을 실시간 체결 또는 실행 가능 유동성으로 표현하지 않습니다.", "Do not present synthetic values as live trades or executable liquidity.", "가격·수량·누계는 표에서 확인합니다.", "Inspect price, quantity, and cumulative values in the table."),
  table: makeGuide("표와 미니 차트", "Table and compact chart", "여러 행의 정확한 값과 작은 추세를 함께 볼 때 사용합니다.", "Use to inspect exact row values alongside compact trends.", "미니 차트를 단독 축의 정확한 비교처럼 읽지 않습니다.", "Do not read a sparkline as a precise shared-axis comparison.", "각 미니 차트는 같은 행의 수열과 연결됩니다.", "Each mini chart remains tied to its source row.")
};
var TYPE_GUIDANCE = {
  "bar-table": makeGuide("막대 표", "Bar table", "행별 값을 숫자와 짧은 막대로 동시에 비교할 때 사용합니다.", "Use to compare row values as numbers and compact bars.", "서로 다른 범위의 행을 축 설명 없이 비교하지 않습니다.", "Do not compare rows with different domains without stating the scale.", "표 값과 막대 길이는 동일한 수치를 나타냅니다.", "Table values and bar lengths encode the same measure."),
  calibration: makeGuide("보정 차트", "Calibration plot", "예측 확률과 관측 비율이 얼마나 맞는지 비교할 때 사용합니다.", "Use to compare predicted probabilities with observed rates.", "좋은 보정이 분류 성능이나 인과 효과까지 뜻한다고 해석하지 않습니다.", "Do not read calibration as classifier discrimination or causal effect.", "점과 y=x 기준선의 거리는 예측과 관측의 차이를 나타냅니다.", "Distance from the y=x reference encodes prediction error."),
  candlestick: makeGuide("캔들스틱", "Candlestick chart", "같은 시간 구간의 시가·고가·저가·종가를 비교할 때 사용합니다.", "Use to inspect open, high, low, and close within each time interval.", "합성 예시를 실시간 시세나 투자 권고로 표현하지 않습니다.", "Do not present synthetic samples as live quotes or investment advice.", "심지는 저가·고가, 몸통은 시가·종가 범위를 나타냅니다.", "The wick encodes low to high; the body encodes open to close."),
  drawdown: makeGuide("낙폭 차트", "Drawdown chart", "값이 직전 누적 최고점에서 얼마나 하락했는지 시간에 따라 살펴볼 때 사용합니다.", "Use to inspect value decline from its running peak over time.", "입력 값을 누적 가치 경로로 정의하지 않은 채 금융 손실로 해석하지 않습니다.", "Do not interpret the measure as financial loss unless the input is a cumulative value path.", "각 점은 value/runningPeak−1이며 회복 시 0으로 돌아옵니다.", "Each point is value/runningPeak−1 and returns to zero at recovery."),
  "forecast-fan": makeGuide("예측 구간 차트", "Forecast interval chart", "중앙 예측과 한 개의 상·하한 구간을 시간 축에서 함께 볼 때 사용합니다.", "Use to inspect a central forecast with one lower and upper interval over time.", "한 구간을 여러 신뢰 수준이나 모델 산출 불확실성으로 표현하지 않습니다.", "Do not present one interval as multiple confidence levels or a model-generated uncertainty estimate.", "채운 띠는 입력 low/high 구간이고 선은 입력 중앙값입니다.", "The band is the supplied low/high interval; the line is the supplied center."),
  funnel: makeGuide("단계형 퍼널", "Stage funnel", "순서가 있는 단계별 수와 전환 비율을 비교할 때 사용합니다.", "Use to compare ordered stage counts and conversion ratios.", "단계 크기 차이를 원인 효과로 해석하지 않습니다.", "Do not interpret stage drop-off as a causal effect.", "폭은 단계 값에 비례하고 표에 이전 단계 대비 비율이 있습니다.", "Width scales with stage value; the table reports conversion from the prior stage."),
  radial: makeGuide("방사 막대 차트", "Radial bar chart", "범주별 크기를 같은 각도 간격의 방사 막대 길이로 비교할 때 사용합니다.", "Use to compare category values as radial bars at equal angular intervals.", "부채꼴 면적 차이를 값의 정밀한 비율로 읽지 않습니다.", "Do not read wedge area as a precise proportional value.", "각도는 범주 순서이며 방사 길이는 수치 크기입니다.", "Angle identifies category order; radial length encodes magnitude."),
  bubble: makeGuide("버블 산점도", "Bubble chart", "두 수치 축과 세 번째 크기 변수를 함께 비교할 때 사용합니다.", "Use to compare two numeric axes and a third size variable.", "원의 면적을 반지름과 동일하게 해석하지 않습니다.", "Do not interpret bubble area as radius.", "위치와 원 크기는 서로 다른 인코딩입니다.", "Position and bubble size are distinct encodings."),
  bump: makeGuide("순위 변화 차트", "Bump chart", "여러 항목의 시점별 상대 순위 변화를 비교할 때 사용합니다.", "Use to compare relative rank changes across time.", "순위 차이를 값 차이의 크기로 해석하지 않습니다.", "Do not interpret rank distance as magnitude difference.", "세로 위치는 순위이며 축 범위는 순위 순서를 따릅니다.", "Vertical position encodes rank order, not magnitude."),
  choropleth: makeGuide("지역 단계도", "Choropleth map", "정해진 지역 경계별 수치 차이를 색과 표로 비교할 때 사용합니다.", "Use to compare values by geographic region with a table alternative.", "지역 크기가 값의 크기를 뜻한다고 해석하지 않습니다.", "Do not interpret region area as its measure value.", "채우기 색은 region에 연결된 수치를 인코딩합니다.", "Fill color encodes the value joined to each region."),
  combo: makeGuide("혼합 차트", "Combo chart", "같은 시간 축에서 막대 값과 선 값을 함께 비교할 때 사용합니다.", "Use to compare a bar measure and a line measure on a shared time axis.", "서로 다른 단위를 이중 축 설명 없이 겹치지 않습니다.", "Do not overlay incompatible units without clearly named scales.", "막대와 선은 서로 다른 데이터 채널을 사용합니다.", "Bars and lines use distinct data channels."),
  "connected-scatter": makeGuide("연결 산점도", "Connected scatter plot", "두 수치 변수의 관계와 관측 순서를 함께 볼 때 사용합니다.", "Use to inspect a numeric relationship and observation order together.", "연결 순서가 없는 점을 임의로 선으로 잇지 않습니다.", "Do not connect points when no meaningful order exists.", "선은 시간·순서 연결이고 점은 각 관측값입니다.", "Lines encode order; points encode individual observations."),
  density: makeGuide("밀도 곡선", "Density plot", "연속형 표본의 분포 형태를 부드럽게 비교할 때 사용합니다.", "Use to compare smoothed shapes of continuous samples.", "표본이 적거나 bandwidth 선택을 숨기지 않습니다.", "Do not hide small samples or the smoothing assumption.", "곡선 높이는 관측 개수가 아닌 추정 밀도입니다.", "Curve height encodes estimated density, not counts."),
  ecdf: makeGuide("누적 경험 분포", "ECDF plot", "임계값 이하에 포함되는 표본 비율을 비교할 때 사용합니다.", "Use to compare the share of observations below each threshold.", "계단 높이를 확률 보정이나 인과 효과로 해석하지 않습니다.", "Do not interpret the step as calibration or causal effect.", "각 단계는 누적 표본 비율을 표시합니다.", "Each step shows cumulative sample share."),
  lollipop: makeGuide("점 막대", "Lollipop chart", "범주별 값을 공통 기준선과 점으로 비교할 때 사용합니다.", "Use to compare category values with a common baseline and endpoint.", "범주가 너무 많거나 정확한 순위가 필요하면 정렬 막대를 선택합니다.", "Use sorted bars when categories are dense or exact ranking matters.", "점 위치가 수치이고 선은 기준선과 거리를 보조합니다.", "The dot marks the value; the stem shows distance from baseline."),
  map: makeGuide("지역 경계 지도", "Map chart", "지역 경계를 값 없이 위치 관계로 확인할 때 사용합니다.", "Use to inspect region geometry and relative location without a measure.", "색상 차이를 값 인코딩으로 오해하지 않습니다.", "Do not imply color encodes values when it does not.", "경계 좌표는 inline Polygon/MultiPolygon에서 가져옵니다.", "Boundary coordinates come from inline Polygon/MultiPolygon geometry."),
  marginal: makeGuide("주변 분포 산점도", "Marginal plot", "두 변수의 관계와 각각의 분포를 함께 탐색할 때 사용합니다.", "Use to explore a two-variable relationship and both marginal distributions.", "가장자리 집계를 주 산점도와 다른 표본으로 만들지 않습니다.", "Do not compute marginals from a different sample than the scatter.", "주변 분포와 산점은 같은 원자료 행을 사용합니다.", "Marginals and scatter marks use the same source rows."),
  "parallel-coordinates": makeGuide("평행 좌표", "Parallel coordinates", "여러 수치 변수의 패턴을 행별 선으로 비교할 때 사용합니다.", "Use to compare multivariate patterns as one line per row.", "축마다 다른 정규화를 숨기거나 교차를 인과로 읽지 않습니다.", "Do not hide per-axis scaling or interpret crossings as causation.", "각 선은 한 행이고 각 축은 별도 수치 범위를 가집니다.", "Each line represents one row; each axis has its own numeric domain."),
  pyramid: makeGuide("피라미드 막대", "Pyramid chart", "두 집단의 같은 기준 수치를 좌우로 비교할 때 사용합니다.", "Use to compare the same measure for two groups on mirrored sides.", "음수와 작은 값이 좌우 대칭으로 오해되도록 만들지 않습니다.", "Do not let sign or small values become ambiguous in the mirror.", "좌우 방향은 집단을, 길이는 크기를 나타냅니다.", "Side encodes group; length encodes magnitude."),
  "ranged-dot": makeGuide("범위 점", "Ranged dot plot", "범위와 대표값을 범주별 공통 축에서 비교할 때 사용합니다.", "Use to compare intervals and point estimates by category.", "범위가 신뢰구간인지 관측 범위인지 이름 없이 표시하지 않습니다.", "Do not leave the meaning of an interval unlabeled.", "선은 범위이고 점은 지정한 대표값입니다.", "The line encodes a range; the dot encodes the selected estimate."),
  sankey: makeGuide("Sankey 흐름", "Sankey flow", "출발지와 도착지 사이의 입력 흐름 크기를 비교할 때 사용합니다.", "Use to compare supplied flow magnitudes between sources and targets.", "중복 링크와 합계를 확인하지 않고 전체 흐름으로 해석하지 않습니다.", "Do not treat links as a complete total without checking duplicate rows and aggregation.", "링크 폭은 입력 value에 비례합니다.", "Link width scales with the supplied value."),
  ridgeline: makeGuide("겹친 밀도 분포", "Ridgeline plot", "여러 그룹의 분포 모양을 층별로 비교할 때 사용합니다.", "Use to compare distribution shapes across stacked groups.", "높이 차이를 정규화 없이 표본 수로 해석하지 않습니다.", "Do not read height as sample count without an explicit scale.", "각 층의 위치는 그룹, 곡선 폭은 분포를 나타냅니다.", "Each ridge identifies a group; its curve shows the distribution."),
  rose: makeGuide("장미형 방사 차트", "Rose chart", "범주별 크기를 방사형 구간 길이로 비교할 때 사용합니다.", "Use to compare category magnitudes as radial segments.", "각도·면적 왜곡으로 인한 정밀 비교를 주장하지 않습니다.", "Do not claim precise comparison from angular area.", "방사 길이는 값의 크기를 나타냅니다.", "Radial length encodes magnitude."),
  sunburst: makeGuide("계층형 방사 구획", "Sunburst chart", "계층 경로와 상위·하위 구성의 크기를 한 화면에서 볼 때 사용합니다.", "Use to inspect hierarchy and parent/child shares in one view.", "깊은 계층의 작은 구획으로 정확한 비교를 요구하지 않습니다.", "Do not rely on tiny deep-level wedges for exact comparisons.", "각 링은 경로 깊이를, 구획 크기는 값을 나타냅니다.", "Rings encode depth; segment size encodes value."),
  tree: makeGuide("트리 구조", "Tree chart", "부모·자식 관계와 계층 경로를 설명할 때 사용합니다.", "Use to explain parent-child relationships and hierarchy.", "연결선 길이와 좌표를 수치 데이터로 해석하지 않습니다.", "Do not interpret link length or position as measured data.", "선은 관계만 나타내며 모든 노드는 표에도 나옵니다.", "Edges encode relationships only; nodes are listed in the table.")
};
var labels = { lollipop: ["점 막대", "Lollipop chart"], ecdf: ["누적 경험 분포", "ECDF plot"], sunburst: ["계층형 방사 구획", "Sunburst chart"], choropleth: ["지역 단계도", "Choropleth map"], map: ["지역 경계 지도", "Map chart"], "parallel-coordinates": ["평행 좌표", "Parallel coordinates"], "network-graph": ["네트워크 그래프", "Network graph"], bubble: ["버블 산점도", "Bubble chart"], bump: ["순위 변화 차트", "Bump chart"], combo: ["혼합 차트", "Combo chart"], "connected-scatter": ["연결 산점도", "Connected scatter plot"], density: ["밀도 곡선", "Density plot"], marginal: ["주변 분포 산점도", "Marginal plot"], pyramid: ["피라미드 막대", "Pyramid chart"], "ranged-dot": ["범위 점", "Ranged dot plot"], ridgeline: ["겹친 밀도 분포", "Ridgeline plot"], rose: ["장미형 방사 차트", "Rose chart"], tree: ["트리 구조", "Tree chart"], "bar-table": ["막대 표", "Bar table"], "range-area": ["범위 영역", "Range area chart"], "kpi-card": ["핵심 지표 카드", "KPI card"] };
var humanize = (id) => id.split("-").map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ");
var freeze = (value) => {
  if (value && typeof value === "object") {
    for (const child of Object.values(value))
      freeze(child);
    Object.freeze(value);
  }
  return value;
};
var KLIC_CHART_EXAMPLE_TYPES = freeze({ ...EXAMPLE_TYPES });
var KLIC_CHART_TYPES = freeze(Object.fromEntries(entries.map((item) => [item.id, {
  ...item,
  title: { ko: labels[item.id]?.[0] ?? humanize(item.id), en: labels[item.id]?.[1] ?? humanize(item.id) },
  guide: TYPE_GUIDANCE[item.id] ?? genericGuides[item.family],
  support: "authorable",
  interactions: ["inspect", "select"],
  keyboard: "Focus the chart region; arrow keys and Home/End move table-row selection; Enter selects the first row; Escape clears selection.",
  reducedMotion: "Static SVG; no autoplay or motion-dependent information."
}])));
var KLIC_CHART_TYPE_IDS = Object.freeze(Object.keys(KLIC_CHART_TYPES));
var scalar = { $schema: "https://json-schema.org/draft/2020-12/schema", oneOf: [{ type: "string" }, { type: "number" }, { type: "boolean" }, { type: "null" }] };
var fieldSchema = { type: "object", properties: { kind: { enum: ["categorical", "ordinal", "quantitative", "temporal"] }, label: { type: "string", maxLength: 120 }, unit: { type: "string", maxLength: 40 }, domain: { type: "array", items: { oneOf: [{ type: "string" }, { type: "number" }] }, minItems: 2, maxItems: 2 } }, required: ["kind"], additionalProperties: false };
var geometrySchema = { type: "object", required: ["type", "features"], properties: { type: { const: "FeatureCollection" }, features: { type: "array", maxItems: 2000, items: { type: "object", required: ["type", "id", "properties", "geometry"], properties: { type: { const: "Feature" }, id: { type: "string", maxLength: 120 }, properties: { type: "object", additionalProperties: { oneOf: [{ type: "string" }, { type: "number" }, { type: "null" }] } }, geometry: { type: "object", required: ["type", "coordinates"], properties: { type: { enum: ["Polygon", "MultiPolygon"] }, coordinates: { type: "array" } }, additionalProperties: false } }, additionalProperties: false } } }, additionalProperties: false };
var KLIC_CHART_SPEC_SCHEMA = freeze({ $schema: "https://json-schema.org/draft/2020-12/schema", title: "KLIC Chart Spec", type: "object", required: ["schemaVersion", "data", "chart"], properties: {
  schemaVersion: { const: "1.0" },
  data: { type: "object", required: ["rows"], properties: { rows: { type: "array", minItems: 1, maxItems: 5000, items: { type: "object", minProperties: 1, maxProperties: 64, additionalProperties: scalar } } }, additionalProperties: false },
  geometry: geometrySchema,
  fields: { type: "object", additionalProperties: fieldSchema },
  chart: { type: "object", required: ["type", "encodings"], properties: { type: { enum: KLIC_CHART_TYPE_IDS }, encodings: { type: "object", minProperties: 1, maxProperties: 16, additionalProperties: { type: "string", minLength: 1, maxLength: 120 } }, options: { type: "object" } }, additionalProperties: false },
  display: { type: "object", properties: { title: { type: "string", maxLength: 200 }, subtitle: { type: "string", maxLength: 300 }, width: { type: "integer", minimum: 240, maximum: 4000 }, height: { type: "integer", minimum: 180, maximum: 4000 }, profile: { enum: ["core", "studio", "data"] }, mode: { enum: ["light", "dark"] } }, additionalProperties: false },
  interactions: { type: "array", maxItems: 2, items: { type: "object", required: ["type"], properties: { type: { enum: ["inspect", "select"] } }, additionalProperties: false } }
}, additionalProperties: false });
var KLIC_CHART_BOARD_SPEC_SCHEMA = freeze({ $schema: "https://json-schema.org/draft/2020-12/schema", title: "KLIC Chart Board Spec", type: "object", required: ["schemaVersion", "charts", "columns"], properties: { schemaVersion: { const: "1.0" }, title: { type: "string", maxLength: 200 }, columns: { type: "integer", enum: [1, 2, 3] }, charts: { type: "array", minItems: 1, maxItems: 8, items: KLIC_CHART_SPEC_SCHEMA } }, additionalProperties: false });
var KLIC_CHART_THEMES = freeze({
  schemaVersion: "1.0",
  profiles: ["core", "studio", "data"],
  modes: ["light", "dark"],
  light: { background: "#fbfcfe", surface: "#ffffff", text: "#132c46", muted: "#52657b", grid: "#dfe5ee", series: ["#245fc2", "#5b82cc", "#163e80", "#5478a8", "#496388", "#687c99"] },
  dark: { background: "#101722", surface: "#172132", text: "#e8eef8", muted: "#a8b6cc", grid: "#31425c", series: ["#91b6ff", "#afcbff", "#719def", "#c0d5ff", "#7a9bc9", "#b6c1d2"] }
});
var KLIC_CHART_INTERACTIONS = freeze([
  { type: "inspect", description: "Read the row values represented by a chart mark.", requires: ["mark-data"], reset: "Move focus or pointer away." },
  { type: "select", description: "Select a table row and announce its exact values in the React chart view.", requires: ["compiled-table"], reset: "Escape clears selection." }
]);

// dist/klic-chart-math.mjs
var finite = (value) => typeof value === "number" && Number.isFinite(value);
var clamp = (value, min, max) => Math.min(max, Math.max(min, value));
function extent(values) {
  const clean = values.filter(finite);
  return clean.length ? [Math.min(...clean), Math.max(...clean)] : [0, 1];
}
function paddedDomain(values, { includeZero = false } = {}) {
  let [min, max] = extent(values);
  if (includeZero) {
    min = Math.min(0, min);
    max = Math.max(0, max);
  }
  if (min === max) {
    const pad = Math.abs(min || 1) * 0.1;
    min -= pad;
    max += pad;
  } else {
    const pad = (max - min) * 0.06;
    min -= pad;
    max += pad;
  }
  return [min, max];
}
function quantile(values, p) {
  const sorted = values.filter(finite).sort((a, b) => a - b);
  if (!sorted.length)
    return null;
  const position = (sorted.length - 1) * clamp(p, 0, 1), lower = Math.floor(position), fraction = position - lower;
  return sorted[lower] + (sorted[lower + 1] === undefined ? 0 : (sorted[lower + 1] - sorted[lower]) * fraction);
}
function histogram(values, count = 12) {
  const clean = values.filter(finite);
  if (!clean.length)
    return [];
  let [min, max] = extent(clean);
  if (min === max) {
    min -= 0.5;
    max += 0.5;
  }
  const size = (max - min) / count, bins = Array.from({ length: count }, (_, index) => ({ x0: min + index * size, x1: index === count - 1 ? max : min + (index + 1) * size, count: 0 }));
  for (const value of clean)
    bins[Math.min(count - 1, Math.floor((value - min) / size))].count++;
  return bins;
}
function kde(values, points = 64) {
  const clean = values.filter(finite);
  if (!clean.length)
    return [];
  const [min, max] = paddedDomain(clean), mean = clean.reduce((sum, value) => sum + value, 0) / clean.length, variance = clean.reduce((sum, value) => sum + (value - mean) ** 2, 0) / clean.length, bandwidth = Math.max(0.000001, 1.06 * Math.sqrt(variance || 1) * clean.length ** -0.2), root = 1 / Math.sqrt(2 * Math.PI), out = [];
  for (let index = 0;index < points; index++) {
    const x = min + (max - min) * index / (points - 1), density = clean.reduce((sum, value) => {
      const u = (x - value) / bandwidth;
      return sum + Math.exp(-0.5 * u * u) * root;
    }, 0) / (clean.length * bandwidth);
    out.push({ x, y: density });
  }
  return out;
}
function ecdf(values) {
  const sorted = values.filter(finite).sort((a, b) => a - b);
  return sorted.map((value, index) => ({ x: value, y: (index + 1) / sorted.length }));
}
function regression(points) {
  const usable = points.filter((point) => finite(point.x) && finite(point.y));
  if (usable.length < 2)
    return null;
  const meanX = usable.reduce((sum, point) => sum + point.x, 0) / usable.length, meanY = usable.reduce((sum, point) => sum + point.y, 0) / usable.length, den = usable.reduce((sum, point) => sum + (point.x - meanX) ** 2, 0);
  if (!den)
    return null;
  const slope = usable.reduce((sum, point) => sum + (point.x - meanX) * (point.y - meanY), 0) / den;
  return { slope, intercept: meanY - slope * meanX };
}
var polar = (cx, cy, r, angle) => ({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
function arcPath(cx, cy, r0, r1, start, end) {
  const a = polar(cx, cy, r1, start), b = polar(cx, cy, r1, end), c = polar(cx, cy, r0, end), d = polar(cx, cy, r0, start), large = end - start > Math.PI ? 1 : 0;
  return r0 ? `M ${a.x} ${a.y} A ${r1} ${r1} 0 ${large} 1 ${b.x} ${b.y} L ${c.x} ${c.y} A ${r0} ${r0} 0 ${large} 0 ${d.x} ${d.y} Z` : `M ${cx} ${cy} L ${a.x} ${a.y} A ${r1} ${r1} 0 ${large} 1 ${b.x} ${b.y} Z`;
}
function treemapRects(items, x, y, width, height) {
  const clean = items.filter((item) => finite(item.value) && item.value > 0);
  if (!clean.length)
    return [];
  const total = clean.reduce((sum, item) => sum + item.value, 0), horizontal = width >= height;
  let cursor = 0;
  return clean.map((item) => {
    const fraction = item.value / total, rect = horizontal ? { x: x + cursor * width, y, width: fraction * width, height } : { x, y: y + cursor * height, width, height: fraction * height };
    cursor += fraction;
    return { ...rect, ...item };
  });
}

// dist/klic-chart-renderers/base.mjs
var format = (value) => typeof value === "number" ? new Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(value) : String(value ?? "—");
function fieldRows(spec) {
  const encoding = spec.chart.encodings;
  return spec.data.rows.map((source, index) => ({ source, index, values: Object.fromEntries(Object.entries(encoding).map(([channel, field]) => [channel, source[field]])) }));
}
function categories(rows, channel) {
  return [...new Set(rows.map((row) => row.values[channel]).filter((value) => value !== null && value !== undefined))];
}
function numberValue(value, kind) {
  if (typeof value === "number")
    return value;
  if (kind === "temporal" && typeof value === "string") {
    const time = Date.parse(value);
    return Number.isFinite(time) ? time : null;
  }
  return null;
}
function domainFor(rows, channel, kind) {
  const values = rows.map((row) => numberValue(row.values[channel], kind)).filter(Number.isFinite);
  return paddedDomain(values, { includeZero: false });
}
function layoutFor(spec) {
  const width = spec.display?.width ?? 800, height = spec.display?.height ?? 420, top = spec.display?.title || spec.display?.subtitle ? 58 : 30;
  return { width, height, top, left: 62, right: width - 22, bottom: height - 48, plotWidth: width - 84, plotHeight: height - top - 48 };
}
var scaleLinear = (value, domain, range) => range[0] + (value - domain[0]) / (domain[1] - domain[0] || 1) * (range[1] - range[0]);
var textShape = (x, y, text, fill, size = 11, anchor = "middle", weight = 400) => ({ kind: "text", x, y, text: String(text), fill, size, anchor, weight });
var lineShape = (x1, y1, x2, y2, stroke, width = 1, dash = null) => ({ kind: "line", x1, y1, x2, y2, stroke, width, dash });
var rectShape = (x, y, width, height, fill, extra = {}) => ({ kind: "rect", x, y, width, height, fill, ...extra });
var circleShape = (cx, cy, r, fill, extra = {}) => ({ kind: "circle", cx, cy, r, fill, ...extra });
var pathShape = (d, stroke, fill = "none", width = 2, extra = {}) => ({ kind: "path", d, stroke, fill, width, ...extra });
function axes(layout, palette, xTicks, yTicks, { xLabel = "", yLabel = "", formatY = format } = {}) {
  const shapes = [], { left, right, top, bottom, plotHeight } = layout;
  for (let index = 0;index <= 4; index++) {
    const y = top + plotHeight * index / 4, value = yTicks[index];
    shapes.push(lineShape(left, y, right, y, palette.grid, 1));
    shapes.push(textShape(left - 8, y + 4, formatY(value), palette.muted, 10, "end"));
  }
  if (xTicks.length) {
    const stride = Math.max(1, Math.ceil(xTicks.length / 8));
    for (let index = 0;index < xTicks.length; index += stride) {
      const tick = xTicks[index];
      shapes.push(textShape(tick.x, bottom + 18, tick.label, palette.muted, 10, "middle"));
    }
  }
  shapes.push(lineShape(left, top, left, bottom, palette.grid, 1));
  shapes.push(lineShape(left, bottom, right, bottom, palette.grid, 1));
  if (xLabel)
    shapes.push(textShape((left + right) / 2, layout.height - 8, xLabel, palette.text, 11));
  if (yLabel)
    shapes.push({ kind: "text", x: 15, y: (top + bottom) / 2, text: yLabel, fill: palette.text, size: 11, anchor: "middle", weight: 500, rotate: -90 });
  return shapes;
}
function cartesianPositions(rows, layout, { x = "x", y = "y", xKind = "categorical", yKind = "quantitative", includeZeroY = true } = {}) {
  const discrete = ["categorical", "ordinal"].includes(xKind), xCats = discrete ? categories(rows, x) : [], yValues = rows.map((row) => numberValue(row.values[y], yKind)).filter(Number.isFinite), xDomain = discrete ? null : domainFor(rows, x, xKind), yDomain = paddedDomain(yValues, { includeZero: includeZeroY });
  const xFor = (value) => discrete ? layout.left + (xCats.indexOf(value) + 0.5) * layout.plotWidth / Math.max(1, xCats.length) : scaleLinear(numberValue(value, xKind), xDomain, [layout.left, layout.right]);
  const yFor = (value) => scaleLinear(numberValue(value, yKind), yDomain, [layout.bottom, layout.top]);
  const xTicks = discrete ? xCats.map((value) => ({ x: xFor(value), label: format(value) })) : Array.from({ length: 5 }, (_, index) => {
    const value = xDomain[0] + (xDomain[1] - xDomain[0]) * index / 4;
    return { x: scaleLinear(value, xDomain, [layout.left, layout.right]), label: xKind === "temporal" ? new Date(value).toISOString().slice(0, 10) : format(value) };
  });
  return { xCats, xDomain, yDomain, xFor, yFor, xTicks };
}
function tableFromRows(rows, columns, values) {
  return { columns, rows: rows.map((row, index) => values(row, index)) };
}

// dist/klic-chart-renderers/cartesian.mjs
var channel2 = (row, name) => row.values[name];
var valueRows = (rows, channels) => tableFromRows(rows, channels, (record) => channels.map((name) => channel2(record, name) ?? "—"));
function baseCartesian(spec, type, palette, layout, rows) {
  const xName = type.id === "market-depth" || type.id === "orderbook" ? "price" : "x";
  const yName = type.id === "market-depth" || type.id === "orderbook" ? "quantity" : "y";
  const xKind = spec.fields?.[spec.chart.encodings[xName]]?.kind ?? type.channels.find((item) => item.name === xName)?.kind ?? "categorical";
  const horizontal = ["bullet", "pyramid", "ranged-dot"].includes(type.id);
  let rangeRows = rows.flatMap((row) => type.id === "candlestick" ? ["open", "high", "low", "close"].map((name) => Number(channel2(row, name))) : type.id === "dumbbell" ? ["start", "end"].map((name) => Number(channel2(row, name))) : type.id === "range-area" || type.id === "forecast-fan" ? ["low", "high", "y"].map((name) => Number(channel2(row, name))) : type.id === "market-depth" || type.id === "orderbook" ? [Number(channel2(row, "quantity")), Number(channel2(row, "cumulative"))] : type.id === "combo" ? [Number(channel2(row, "y")), Number(channel2(row, "y2"))] : [Number(channel2(row, yName))]).filter(Number.isFinite);
  if (type.id === "market-depth" && !spec.chart.encodings.cumulative) {
    const totals = new Map;
    for (const row of rows) {
      const side = String(channel2(row, "side")).toLowerCase(), name = side.includes("bid") || side.includes("매") ? "bid" : "ask";
      totals.set(name, (totals.get(name) || 0) + (Number(channel2(row, "quantity")) || 0));
    }
    rangeRows.push(...totals.values());
  }
  const positionRows = type.id === "drawdown" ? (() => {
    let peak = -Infinity;
    return [...rows].sort((a, b) => {
      const av = numberValue(channel2(a, xName), "temporal"), bv = numberValue(channel2(b, xName), "temporal");
      return av !== null && bv !== null ? av - bv : String(channel2(a, xName)).localeCompare(String(channel2(b, xName)));
    }).map((row) => {
      const value = Number(channel2(row, yName));
      peak = Math.max(peak, value);
      return { ...row, values: { ...row.values, y: peak > 0 ? value / peak - 1 : 0, rawY: value } };
    });
  })() : rows;
  const yValues = type.id === "drawdown" ? positionRows.map((row) => row.values.y) : rangeRows;
  let yDomain = paddedDomain(yValues, { includeZero: ["bar", "grouped-bar", "stacked-bar", "pyramid", "bullet", "bar-table"].includes(type.id) });
  const percentStack = spec.chart.options?.stack === "percent", stacked = type.id === "stacked-bar" || type.id === "stacked-area" || type.id === "streamgraph" || type.id === "grouped-bar" && ["stacked", "percent"].includes(spec.chart.options?.stack);
  if (stacked) {
    const perX = new Map, seriesNames = [...new Set(rows.map((row) => channel2(row, "series") ?? "Series 1"))];
    for (const row of rows) {
      const x = channel2(row, xName), series = channel2(row, "series") ?? "Series 1";
      if (!perX.has(x))
        perX.set(x, new Map);
      const group = perX.get(x);
      group.set(series, (group.get(series) || 0) + (Number(channel2(row, yName)) || 0));
    }
    const extents = [];
    for (const values of perX.values()) {
      const total = seriesNames.reduce((sum, name) => sum + (values.get(name) || 0), 0);
      if (type.id === "streamgraph") {
        let accumulated = -total / 2;
        extents.push(accumulated);
        for (const name of seriesNames) {
          accumulated += values.get(name) || 0;
          extents.push(accumulated);
        }
      } else {
        let accumulated = 0;
        extents.push(0);
        for (const name of seriesNames) {
          accumulated += values.get(name) || 0;
          extents.push(accumulated);
        }
      }
    }
    if (percentStack)
      yDomain = [0, 1];
    else
      yDomain = paddedDomain(extents, { includeZero: type.id !== "streamgraph" });
  }
  const plotLayout = type.id === "marginal" ? { ...layout, top: layout.top + 22, right: layout.right - 18, bottom: layout.bottom - 18, plotWidth: layout.plotWidth - 18, plotHeight: layout.plotHeight - 40 } : layout;
  const p = cartesianPositions(positionRows, plotLayout, { x: xName, y: type.id === "drawdown" ? "y" : yName, xKind, includeZeroY: ["bar", "grouped-bar", "stacked-bar", "pyramid", "bullet", "bar-table"].includes(type.id) });
  let xFor = p.xFor, yFor = (value) => scaleLinear(numberValue(value, "quantitative"), yDomain, [plotLayout.bottom, plotLayout.top]), xTicks = p.xTicks;
  if (type.id === "calibration") {
    const domain = paddedDomain(rows.flatMap((row) => [Number(channel2(row, "x")), Number(channel2(row, "y"))]).filter(Number.isFinite));
    xFor = (value) => scaleLinear(Number(value), domain, [plotLayout.left, plotLayout.right]);
    yFor = (value) => scaleLinear(Number(value), domain, [plotLayout.bottom, plotLayout.top]);
    yDomain = domain;
    xTicks = Array.from({ length: 5 }, (_, index) => {
      const value = domain[0] + (domain[1] - domain[0]) * index / 4;
      return { x: xFor(value), label: format(value) };
    });
  }
  if (horizontal) {
    const values = rows.flatMap((row) => type.id === "bullet" ? ["y", "target", "low", "high"].map((name) => Number(channel2(row, name))) : type.id === "ranged-dot" ? ["low", "high", "point"].map((name) => Number(channel2(row, name))) : [Number(channel2(row, "y"))]).filter(Number.isFinite);
    const domain = paddedDomain(values, { includeZero: true });
    xFor = (value) => scaleLinear(Number(value), domain, [plotLayout.left, plotLayout.right]);
    xTicks = Array.from({ length: 5 }, (_, index) => {
      const value = domain[0] + (domain[1] - domain[0]) * index / 4;
      return { x: xFor(value), label: format(value) };
    });
    yDomain = domain;
  }
  const shapes = [];
  if (horizontal) {
    for (const tick of xTicks) {
      shapes.push(lineShape(tick.x, layout.top, tick.x, layout.bottom, palette.grid, 1));
      shapes.push(textShape(tick.x, layout.bottom + 18, tick.label, palette.muted, 9));
    }
    shapes.push(lineShape(layout.left, layout.bottom, layout.right, layout.bottom, palette.grid));
  } else {
    const ticks = [0, 1, 2, 3, 4].map((i) => yDomain[0] + (yDomain[1] - yDomain[0]) * i / 4);
    shapes.push(...axes(plotLayout, palette, xTicks, ticks, { xLabel: spec.fields?.[spec.chart.encodings[xName]]?.label ?? xName, yLabel: spec.fields?.[spec.chart.encodings[yName]]?.label ?? yName, formatY: format }));
  }
  return { p: { ...p, xFor, xTicks }, yDomain, yFor, xFor, shapes, positionRows, horizontal, plotLayout };
}
function pathFor(points) {
  return points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
}
function groupRows(rows) {
  const groups = new Map;
  for (const row of rows) {
    const key = channel2(row, "series") ?? "Series 1";
    if (!groups.has(key))
      groups.set(key, []);
    groups.get(key).push(row);
  }
  return [...groups.entries()];
}
function basicMarks(spec, type, palette, layout, rows, base) {
  const shapes = [...base.shapes], { p, yDomain, yFor, xFor } = base, { left, right, bottom, plotWidth, plotHeight, top } = layout;
  const xCats = categories(rows, "x"), slot = plotWidth / Math.max(1, xCats.length), yZero = yFor(Math.max(yDomain[0], Math.min(yDomain[1], 0)));
  if (["bar", "grouped-bar", "stacked-bar", "bar-table"].includes(type.id)) {
    const groupList = groupRows(rows), stack = spec.chart.options?.stack === "stacked" || spec.chart.options?.stack === "percent" || type.id === "stacked-bar", percent = spec.chart.options?.stack === "percent";
    const totals = new Map;
    for (const row of rows) {
      const key = channel2(row, "x");
      totals.set(key, (totals.get(key) || 0) + (Number(channel2(row, "y")) || 0));
    }
    const stacks = new Map;
    for (const [seriesIndex, [series, group]] of groupList.entries())
      for (const row of group) {
        const category = channel2(row, "x"), value = Number(channel2(row, "y")), index = xCats.indexOf(category);
        if (!Number.isFinite(value) || index < 0)
          continue;
        const key = String(category), previous = stack ? stacks.get(key) || 0 : 0, actual = percent ? totals.get(category) ? value / totals.get(category) : 0 : value, from = stack ? previous : 0, to = from + actual;
        if (stack)
          stacks.set(key, to);
        const width = stack ? slot * 0.66 : slot * 0.68 / groupList.length, offset = stack ? slot * 0.17 : slot * (0.16 + seriesIndex * 0.68 / groupList.length), x = left + index * slot + offset, y1 = yFor(from), y2 = yFor(to), fill = palette.series[seriesIndex % palette.series.length];
        if (type.id === "pyramid" && channel2(row, "side") && String(channel2(row, "side")).toLowerCase() === "left") {
          const center = left + plotWidth * 0.5, w = Math.abs(x - y2);
          shapes.push(rectShape(center - w, y2, w, Math.max(1, yZero - y2), fill));
        } else
          shapes.push(rectShape(x, Math.min(y1, y2), width, Math.max(1, Math.abs(y1 - y2)), fill, { radius: 3, title: `${category}: ${format(value)}` }));
        if (type.id === "bar-table") {
          const label = String(category);
          shapes.push(textShape(left + index * slot + slot * 0.5, bottom + 34, label, palette.text, 10));
        }
      }
  } else if (type.id === "combo") {
    const slot = plotWidth / Math.max(1, rows.length), points = [];
    rows.forEach((row, index) => {
      const x = xFor(channel2(row, "x")), y = yFor(channel2(row, "y")), lineValue = channel2(row, "y2") ?? channel2(row, "y"), lineY = yFor(lineValue);
      shapes.push(rectShape(x - slot * 0.22, y, slot * 0.44, Math.max(1, bottom - y), palette.series[1], { opacity: 0.72 }));
      points.push({ x, y: lineY });
    });
    if (points.length)
      shapes.push(pathShape(pathFor(points), palette.series[0], "none", 2.5));
    for (const point of points)
      shapes.push(circleShape(point.x, point.y, 3.5, palette.series[0]));
  } else if (type.id === "drawdown") {
    const ordered = base.positionRows, points = ordered.map((row) => ({ x: xFor(channel2(row, "x")), y: yFor(row.values.y), row })), zero = yFor(0);
    if (points.length) {
      shapes.push(pathShape(`M ${points[0].x} ${zero} ${pathFor(points)} L ${points.at(-1).x} ${zero} Z`, palette.series[0], palette.series[0], 1, { opacity: 0.24 }));
      shapes.push(pathShape(pathFor(points), palette.series[0], "none", 2));
    }
    const tableRows = ordered.map((row) => [channel2(row, "x"), row.values.rawY, row.values.y]);
    return { shapes, rows: ordered.map((row, index) => ({ index, values: { ...row.values, drawdown: row.values.y }, tableValues: tableRows[index] })), columns: ["x", "value", "drawdown"], tableRows };
  } else if (type.id === "stacked-area" || type.id === "streamgraph") {
    const xValues = categories(rows, "x"), xKind = spec.fields?.[spec.chart.encodings.x]?.kind ?? "categorical";
    if (xKind === "temporal" || xKind === "quantitative")
      xValues.sort((a, b) => numberValue(a, xKind) - numberValue(b, xKind));
    const groups = groupRows(rows), valuesBySeries = new Map(groups.map(([name]) => [name, new Map]));
    for (const row of rows) {
      const series = channel2(row, "series") ?? "Series 1", x = channel2(row, "x"), seriesRows = valuesBySeries.get(series);
      seriesRows.set(x, (seriesRows.get(x) || 0) + (Number(channel2(row, "y")) || 0));
    }
    for (const [seriesIndex, [series]] of groups.entries()) {
      let accumulated = new Map(xValues.map((x) => [x, type.id === "streamgraph" ? -[...valuesBySeries.values()].reduce((sum, group) => sum + (group.get(x) || 0), 0) / 2 : 0]));
      const upper = [], lower = [];
      for (const x of xValues) {
        const bottomValue = accumulated.get(x), topValue = bottomValue + (valuesBySeries.get(series).get(x) || 0), pointX = xFor(x);
        lower.push({ x: pointX, y: yFor(bottomValue) });
        upper.push({ x: pointX, y: yFor(topValue) });
        accumulated.set(x, topValue);
      }
      if (upper.length) {
        const d = `${pathFor(upper)} L ${[...lower].reverse().map((point) => `${point.x} ${point.y}`).join(" L ")} Z`;
        shapes.push(pathShape(d, "none", palette.series[seriesIndex % palette.series.length], 0, { opacity: 0.4 }));
        shapes.push(pathShape(pathFor(upper), palette.series[seriesIndex % palette.series.length], "none", 1.5));
      }
    }
  } else if (["line", "area", "slope", "bump", "sparkline"].includes(type.id)) {
    for (const [seriesIndex, [series, group]] of groupRows(rows).entries()) {
      const sorted = [...group].sort((a, b) => {
        const av = channel2(a, "x"), bv = channel2(b, "x");
        return typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
      });
      const points = sorted.map((row) => ({ x: xFor(channel2(row, "x")), y: yFor(channel2(row, "y")), row }));
      if (!points.length)
        continue;
      if (type.id === "area" || type.id === "stacked-area" || type.id === "streamgraph") {
        const baseline = type.id === "streamgraph" ? top + plotHeight * 0.5 : yZero, d = `M ${points[0].x} ${baseline} ${pathFor(points)} L ${points.at(-1).x} ${baseline} Z`;
        shapes.push(pathShape(d, "none", palette.series[seriesIndex % palette.series.length], 0, { opacity: 0.28 }));
      }
      shapes.push(pathShape(pathFor(points), palette.series[seriesIndex % palette.series.length], "none", 2));
      for (const point of points)
        shapes.push(circleShape(point.x, point.y, 3, palette.series[seriesIndex % palette.series.length]));
    }
    if (type.id === "bump")
      for (const [index, value] of xCats.entries())
        shapes.push(textShape(left + (index + 0.5) * plotWidth / xCats.length, bottom + 32, String(value), palette.muted, 9));
  } else if (["scatter", "bubble", "connected-scatter", "marginal", "regression", "calibration"].includes(type.id)) {
    const points = rows.map((row) => ({ x: xFor(channel2(row, "x")), y: yFor(channel2(row, "y")), row, rawX: Number(channel2(row, "x")), rawY: Number(channel2(row, "y")) })).filter((point) => Number.isFinite(point.x) && Number.isFinite(point.y));
    if (type.id === "connected-scatter")
      for (const [, [, group]] of groupRows(rows).entries()) {
        const line = group.map((row) => ({ x: xFor(channel2(row, "x")), y: yFor(channel2(row, "y")) }));
        shapes.push(pathShape(pathFor(line), palette.series[0], "none", 1.8));
      }
    for (const point of points) {
      const size = type.id === "bubble" ? Math.max(4, Math.min(16, Number(channel2(point.row, "size")) || 6)) : type.id === "scatter" && channel2(point.row, "size") ? Math.max(3, Math.min(14, Number(channel2(point.row, "size")) || 4)) : 4;
      shapes.push(circleShape(point.x, point.y, size, palette.series[0], { opacity: 0.78 }));
    }
    if (type.id === "calibration")
      shapes.push(lineShape(left, bottom, right, top, palette.muted, 1, "4 4"));
    if (type.id === "regression") {
      const fit = regression(rows.map((row) => ({ x: Number(channel2(row, "x")), y: Number(channel2(row, "y")) })));
      if (fit) {
        const [min, max] = extent(rows.map((row) => Number(channel2(row, "x"))));
        shapes.push(pathShape(pathFor([{ x: xFor(min), y: yFor(fit.slope * min + fit.intercept) }, { x: xFor(max), y: yFor(fit.slope * max + fit.intercept) }]), palette.series[2], "none", 2));
      }
    }
    if (type.id === "marginal") {
      const plot = base.plotLayout, xBins = histogram(points.map((point) => point.rawX), 10), yBins = histogram(points.map((point) => point.rawY), 10), maxX = Math.max(...xBins.map((bin) => bin.count), 1), maxY = Math.max(...yBins.map((bin) => bin.count), 1), barWidth = plot.plotWidth / Math.max(1, xBins.length);
      for (const bin of xBins) {
        const height = bin.count / maxX * 16, x = xFor((bin.x0 + bin.x1) / 2);
        shapes.push(rectShape(x - barWidth / 2, layout.top + 2, Math.max(1, barWidth - 1), Math.max(1, height), palette.series[1], { opacity: 0.55 }));
      }
      for (const bin of yBins) {
        const y0 = yFor(bin.x0), y1 = yFor(bin.x1), width = bin.count / maxY * 15;
        shapes.push(rectShape(plot.right + 2, Math.min(y0, y1), Math.max(1, width), Math.max(1, Math.abs(y1 - y0) - 1), palette.series[1], { opacity: 0.55 }));
      }
    }
  } else if (type.id === "lollipop") {
    for (const [index, row] of rows.entries()) {
      const x = xFor(channel2(row, "x")), y = yFor(channel2(row, "y"));
      shapes.push(lineShape(x, yZero, x, y, palette.series[index % palette.series.length], 2));
      shapes.push(circleShape(x, y, 5, palette.series[index % palette.series.length]));
    }
  } else if (type.id === "dumbbell") {
    for (const [index, row] of rows.entries()) {
      const x = left + (index + 0.5) * plotWidth / rows.length, y1 = yFor(channel2(row, "start")), y2 = yFor(channel2(row, "end"));
      shapes.push(lineShape(x, y1, x, y2, palette.muted, 3));
      shapes.push(circleShape(x, y1, 5, palette.series[0]));
      shapes.push(circleShape(x, y2, 5, palette.series[2]));
    }
    rows.forEach((row, index) => shapes.push(textShape(left + (index + 0.5) * plotWidth / rows.length, bottom + 34, channel2(row, "x"), palette.muted, 9)));
  } else if (type.id === "range-area" || type.id === "forecast-fan") {
    const sorted = [...rows].sort((a, b) => String(channel2(a, "x")).localeCompare(String(channel2(b, "x"))));
    const upper = sorted.map((row) => ({ x: xFor(channel2(row, "x")), y: yFor(channel2(row, "high")) })), lower = sorted.map((row) => ({ x: xFor(channel2(row, "x")), y: yFor(channel2(row, "low")) })).reverse();
    if (upper.length)
      shapes.push(pathShape(`${pathFor(upper)} ${pathFor(lower)} Z`, palette.series[1], palette.series[1], 1, { opacity: 0.24 }));
    const center = sorted.map((row) => ({ x: xFor(channel2(row, "x")), y: yFor(channel2(row, "y")) }));
    if (center.length)
      shapes.push(pathShape(pathFor(center), palette.series[0], "none", 2));
  } else if (type.id === "candlestick") {
    const slot = plotWidth / Math.max(1, rows.length), width = Math.max(3, slot * 0.52);
    for (const [index, row] of rows.entries()) {
      const x = left + (index + 0.5) * slot, low = yFor(channel2(row, "low")), high = yFor(channel2(row, "high")), open = yFor(channel2(row, "open")), close = yFor(channel2(row, "close")), up = Number(channel2(row, "close")) >= Number(channel2(row, "open")), color = up ? palette.series[0] : palette.series[2];
      shapes.push(lineShape(x, high, x, low, color, 1.5));
      shapes.push(rectShape(x - width / 2, Math.min(open, close), width, Math.max(2, Math.abs(open - close)), color));
    }
  } else if (type.id === "bullet") {
    const baseline = xFor(0), slot = plotHeight / Math.max(1, rows.length);
    for (const [index, row] of rows.entries()) {
      const y = top + (index + 0.5) * slot, measure = xFor(channel2(row, "y")), target = xFor(channel2(row, "target"));
      shapes.push(rectShape(left, y - 8, plotWidth, 16, palette.grid));
      if (channel2(row, "low") !== undefined && channel2(row, "high") !== undefined) {
        const a = xFor(channel2(row, "low")), b = xFor(channel2(row, "high"));
        shapes.push(rectShape(Math.min(a, b), y - 8, Math.abs(b - a), 16, palette.series[1], { opacity: 0.24 }));
      }
      shapes.push(rectShape(Math.min(baseline, measure), y - 4, Math.max(1, Math.abs(measure - baseline)), 8, palette.series[0]));
      shapes.push(lineShape(target, y - 12, target, y + 12, palette.text, 2));
      shapes.push(textShape(left - 6, y + 3, channel2(row, "x"), palette.muted, 9, "end"));
    }
  } else if (type.id === "pyramid") {
    const categoriesList = categories(rows, "x"), max = Math.max(...rows.map((row) => Math.abs(Number(channel2(row, "y")) || 0)), 1), center = left + plotWidth / 2, slot = plotHeight / Math.max(1, categoriesList.length);
    shapes.push(lineShape(center, top, center, bottom, palette.grid, 1));
    for (const row of rows) {
      const index = categoriesList.indexOf(channel2(row, "x")), value = Number(channel2(row, "y")) || 0, side = String(channel2(row, "side")).toLowerCase(), width = Math.abs(value) / max * plotWidth * 0.45, y = top + (index + 0.5) * slot, x = side === "left" ? center - width : center;
      shapes.push(rectShape(x, y - slot * 0.28, width, slot * 0.56, palette.series[side === "left" ? 0 : 2], { title: `${channel2(row, "x")}: ${format(value)}` }));
      shapes.push(textShape(side === "left" ? x - 6 : x + width + 6, y + 3, channel2(row, "x"), palette.muted, 9, side === "left" ? "end" : "start"));
    }
  } else if (type.id === "ranged-dot") {
    const slot = plotHeight / Math.max(1, rows.length);
    for (const [index, row] of rows.entries()) {
      const y = top + (index + 0.5) * slot, x0 = xFor(channel2(row, "low")), x1 = xFor(channel2(row, "high")), point = channel2(row, "point") ?? (Number(channel2(row, "low")) + Number(channel2(row, "high"))) / 2;
      shapes.push(lineShape(x0, y, x1, y, palette.series[1], 4));
      shapes.push(circleShape(xFor(point), y, 5, palette.series[0]));
      shapes.push(textShape(left - 6, y + 3, channel2(row, "x"), palette.muted, 9, "end"));
    }
  } else if (type.id === "parallel-coordinates") {
    const dimensions = Object.keys(spec.chart.encodings).filter((name) => name.startsWith("dimension")).sort((a, b) => Number(a.slice(9)) - Number(b.slice(9)));
    const xForDimension = (index) => left + (dimensions.length < 2 ? 0 : index * plotWidth / (dimensions.length - 1));
    for (const [index, row] of rows.entries()) {
      const points = dimensions.map((dimension, dimensionIndex) => {
        const values = rows.map((item) => Number(channel2(item, dimension))).filter(Number.isFinite), domain = paddedDomain(values);
        const y = top + plotHeight - (Number(channel2(row, dimension)) - domain[0]) / (domain[1] - domain[0] || 1) * plotHeight;
        return { x: xForDimension(dimensionIndex), y };
      });
      shapes.push(pathShape(pathFor(points), palette.series[index % palette.series.length], "none", 1.5, { opacity: 0.68 }));
    }
    dimensions.forEach((dimension, index) => {
      const x = xForDimension(index);
      shapes.push(lineShape(x, top, x, bottom, palette.grid));
      shapes.push(textShape(x, bottom + 18, spec.fields?.[spec.chart.encodings[dimension]]?.label ?? dimension, palette.muted, 9));
    });
  } else if (type.id === "market-depth") {
    const sides = new Map;
    for (const row of rows) {
      const side = String(channel2(row, "side")).toLowerCase(), name = side.includes("bid") || side.includes("매") ? "bid" : "ask";
      if (!sides.has(name))
        sides.set(name, []);
      sides.get(name).push(row);
    }
    for (const [name, group] of sides) {
      const bid = name === "bid", ordered = [...group].sort((a, b) => bid ? Number(channel2(b, "price")) - Number(channel2(a, "price")) : Number(channel2(a, "price")) - Number(channel2(b, "price")));
      let accumulated = 0;
      const points = ordered.map((row) => {
        accumulated += Number(channel2(row, "quantity")) || 0;
        return { x: xFor(channel2(row, "price")), y: yFor(channel2(row, "cumulative") ?? accumulated) };
      });
      const color = bid ? palette.series[0] : palette.series[2];
      if (points.length > 1)
        shapes.push(pathShape(pathFor(points), color, "none", 2.5));
      for (const point of points)
        shapes.push(circleShape(point.x, point.y, 3.5, color));
      shapes.push(textShape(bid ? left + 8 : right - 8, top + 14, bid ? "Bid" : "Ask", color, 10, bid ? "start" : "end", 600));
    }
  } else if (type.id === "orderbook") {
    for (const row of rows) {
      const side = String(channel2(row, "side")).toLowerCase(), x = xFor(channel2(row, "price")), value = Number(channel2(row, "cumulative") ?? channel2(row, "quantity")) || 0, y = yFor(value), color = side.includes("bid") || side.includes("매") ? palette.series[0] : palette.series[2], width = plotWidth / rows.length * 0.6;
      shapes.push(circleShape(x, y, 3.5, color));
      shapes.push(rectShape(x - width / 2, y, width, Math.max(1, bottom - y), color, { opacity: 0.32 }));
    }
    const sides = categories(rows, "side");
    shapes.push(...sides.map((side, index) => textShape(left + 48 + index * 100, top + 16, String(side), palette.series[index % palette.series.length], 10, "start", 600)));
  }
  const columns = Object.keys(spec.chart.encodings), table = valueRows(rows, columns), plotRows = rows.map((row, index) => ({ index, values: row.values, tableValues: table.rows[index] }));
  return { shapes, rows: plotRows, columns: table.columns, tableRows: table.rows };
}
function compileCartesian(spec, type, palette, layout, rows = fieldRows(spec)) {
  const base = baseCartesian(spec, type, palette, layout, rows), result = basicMarks(spec, type, palette, layout, rows, base);
  return { shapes: result.shapes, rows: result.rows, table: { columns: result.columns ?? Object.keys(spec.chart.encodings), rows: result.tableRows }, diagnostics: [] };
}

// dist/klic-chart-renderers/composition.mjs
var pathFor2 = (points) => points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
var arcFor = (cx, cy, inner, outer, start, end) => end - start >= Math.PI * 1.999 ? `${arcPath(cx, cy, inner, outer, start, start + Math.PI)} ${arcPath(cx, cy, inner, outer, start + Math.PI, end)}` : arcPath(cx, cy, inner, outer, start, end);
var sum = (rows) => rows.reduce((total, row) => total + (Number(row.values.value) || 0), 0);
function pieSlices(rows, valueKey = "value", categoryKey = "category") {
  const usable = rows.filter((row) => Number.isFinite(Number(row.values[valueKey])) && Number(row.values[valueKey]) > 0), total = usable.reduce((amount, row) => amount + Number(row.values[valueKey]), 0);
  let angle = -Math.PI / 2;
  return usable.map((row) => {
    const span = Number(row.values[valueKey]) / total * Math.PI * 2, slice = { row, start: angle, end: angle + span, value: Number(row.values[valueKey]), label: String(row.values[categoryKey] ?? "") };
    angle += span;
    return slice;
  });
}
function compileParts(spec, type, palette, layout, rows) {
  const shapes = [], cx = (layout.left + layout.right) / 2, cy = (layout.top + layout.bottom) / 2, r = Math.min(layout.plotWidth, layout.plotHeight) * 0.42;
  if (type.id === "kpi-card") {
    const row = rows[0], label = String(row.values.label), value = format(row.values.value), delta = Number(row.values.delta), deltaText = Number.isFinite(delta) ? `${delta > 0 ? "+" : ""}${format(delta)}` : "", tableRows = rows.map((record) => [record.values.label, record.values.value, record.values.delta ?? "—"]);
    shapes.push(textShape(cx, cy - 12, label, palette.muted, 13));
    shapes.push(textShape(cx, cy + 22, value, palette.text, 34, "middle", 700));
    if (deltaText)
      shapes.push(textShape(cx, cy + 46, deltaText, palette.series[0], 12, "middle", 600));
    return { shapes, rows: tableRows.map((tableValues, index) => ({ index, values: {}, tableValues })), table: { columns: ["Label", "Value", "Change"], rows: tableRows }, diagnostics: [] };
  }
  const sliceTypes = new Set(["pie", "donut", "radial", "rose"]), slices = sliceTypes.has(type.id) ? type.id === "rose" || type.id === "radial" ? (() => {
    const usable = rows.filter((row) => Number.isFinite(Number(row.values.value)) && Number(row.values.value) > 0), count = usable.length;
    return usable.map((row, index) => ({ row, start: -Math.PI / 2 + index / count * Math.PI * 2, end: -Math.PI / 2 + (index + 1) / count * Math.PI * 2, value: Number(row.values.value), label: String(row.values.category ?? "") }));
  })() : pieSlices(rows) : [], tableRows = slices.map((slice) => [slice.label, slice.value, slice.value / (sum(rows) || 1)]);
  for (const [index, slice] of slices.entries()) {
    const { start, end } = slice, full = end - start >= Math.PI * 1.999, fill = palette.series[index % palette.series.length];
    if (type.id === "sunburst")
      continue;
    if (type.id === "gauge")
      continue;
    const inner = type.id === "pie" ? 0 : type.id === "rose" ? r * 0.24 : type.id === "radial" ? r * 0.35 : r * 0.55, outer = type.id === "rose" || type.id === "radial" ? r * (0.42 + 0.58 * slice.value / Math.max(...slices.map((item) => item.value))) : r;
    if (full) {
      shapes.push(pathShape(arcPath(cx, cy, inner, outer, start, start + Math.PI), fill, fill, 1));
      shapes.push(pathShape(arcPath(cx, cy, inner, outer, start + Math.PI, end - 0.0001), fill, fill, 1));
    } else
      shapes.push(pathShape(arcPath(cx, cy, inner, outer, start, end), fill, fill, 1));
    const middle = (start + end) / 2, label = polar(cx, cy, outer + 14, middle);
    shapes.push(textShape(label.x, label.y, slice.label, palette.text, 9));
  }
  if (type.id === "sunburst") {
    const tree = new Map, childrenByPath = new Map, roots = [];
    for (const row of rows) {
      const segments = String(row.values.path).split("/").filter(Boolean), value = Number(row.values.value) || 0;
      let prefix = "";
      for (const segment of segments) {
        const parent = prefix;
        prefix = prefix ? `${prefix}/${segment}` : segment;
        tree.set(prefix, (tree.get(prefix) || 0) + value);
        if (parent) {
          if (!childrenByPath.has(parent))
            childrenByPath.set(parent, []);
          if (!childrenByPath.get(parent).includes(prefix))
            childrenByPath.get(parent).push(prefix);
        } else if (!roots.includes(prefix))
          roots.push(prefix);
      }
    }
    const rootTotal = roots.reduce((total, name) => total + (tree.get(name) || 0), 0), maxDepth = Math.max(1, ...[...tree.keys()].map((path) => path.split("/").length - 1)), ringWidth = r * 0.58 / (maxDepth + 1);
    const drawNode = (name, start, end, depth, rootIndex) => {
      const inner = r * 0.24 + depth * ringWidth, outer = Math.min(r * 0.9, inner + ringWidth * 0.86), color = palette.series[(rootIndex + depth) % palette.series.length];
      if (outer > inner && end - start > 0.0001)
        shapes.push(pathShape(arcFor(cx, cy, inner, outer, start, end), color, color, 1, { opacity: depth === 0 ? 0.55 : 0.75 }));
      let cursor = start;
      for (const child of childrenByPath.get(name) || []) {
        const span = (tree.get(name) > 0 ? (tree.get(child) || 0) / tree.get(name) : 0) * (end - start);
        drawNode(child, cursor, cursor + span, depth + 1, rootIndex);
        cursor += span;
      }
    };
    let start = -Math.PI / 2;
    for (const [rootIndex, name] of roots.entries()) {
      const span = rootTotal ? (tree.get(name) || 0) / rootTotal * Math.PI * 2 : 0;
      drawNode(name, start, start + span, 0, rootIndex);
      start += span;
    }
    tableRows.length = 0;
    for (const row of rows)
      tableRows.push([row.values.path, row.values.value]);
  }
  if (type.id === "gauge") {
    const min = Number(spec.chart.options?.min ?? 0), max = Number(spec.chart.options?.max ?? 100), value = Number(rows[0]?.values.value ?? 0), fraction = Math.max(0, Math.min(1, (value - min) / (max - min || 1))), start = -Math.PI, end = 0;
    shapes.push(pathShape(arcPath(cx, cy, r * 0.68, r, start, end), palette.grid, palette.grid, 1));
    if (fraction > 0)
      shapes.push(pathShape(arcPath(cx, cy, r * 0.68, r, start, start + Math.PI * fraction), palette.series[0], palette.series[0], 1));
    if (Number.isFinite(Number(rows[0]?.values.target))) {
      const targetFraction = Math.max(0, Math.min(1, (Number(rows[0].values.target) - min) / (max - min || 1))), targetPoint = polar(cx, cy, r * 0.8, start + Math.PI * targetFraction);
      shapes.push(lineShape(cx, cy, targetPoint.x, targetPoint.y, palette.text, 2));
    }
    shapes.push(textShape(cx, cy + 5, format(value), palette.text, 22, "middle", 700));
    shapes.push(textShape(cx, cy + 24, `${format(min)}–${format(max)}`, palette.muted, 10));
    tableRows.length = 0;
    tableRows.push([value, rows[0]?.values.target ?? "—", min, max]);
  }
  if (type.id === "treemap") {
    const items = rows.map((row) => ({ label: String(row.values.path ?? row.values.category), value: Number(row.values.value) || 0 })), rects = treemapRects(items, layout.left, layout.top, layout.plotWidth, layout.plotHeight);
    rects.forEach((item, index) => {
      shapes.push(rectShape(item.x, item.y, Math.max(0, item.width - 2), Math.max(0, item.height - 2), palette.series[index % palette.series.length], { opacity: 0.7 }));
      shapes.push(textShape(item.x + item.width / 2, item.y + item.height / 2, item.label, palette.text, 10));
    });
    tableRows.length = 0;
    for (const item of items)
      tableRows.push([item.label, item.value]);
  }
  if (type.id === "waterfall") {
    const slot = layout.plotWidth / Math.max(1, rows.length), totalField = spec.chart.options?.totalField;
    let total = 0;
    const steps = rows.map((row) => {
      const raw = Number(row.values.delta), marker = totalField ? row.source?.[totalField] : undefined, isTotal = marker === true || String(marker ?? "").toLowerCase() === "total" || String(marker ?? "").toLowerCase() === "subtotal", start = isTotal ? 0 : total, end = isTotal ? Number.isFinite(raw) ? raw : total : total + (Number.isFinite(raw) ? raw : 0);
      total = end;
      return { row, start, end, delta: isTotal ? "—" : raw, isTotal };
    }), domain = paddedDomain(steps.flatMap((step) => [step.start, step.end]), { includeZero: true }), yFor = (value) => scaleLinear(value, domain, [layout.bottom, layout.top]), baseline = yFor(0);
    tableRows.length = 0;
    for (const [index, step] of steps.entries()) {
      const x = layout.left + index * slot + slot * 0.15, y0 = yFor(step.start), y1 = yFor(step.end), color = step.isTotal ? palette.series[2] : step.end >= step.start ? palette.series[0] : palette.series[2];
      shapes.push(rectShape(x, Math.min(y0, y1), slot * 0.7, Math.max(2, Math.abs(y0 - y1)), color, { title: `${step.row.values.category}: ${format(step.end)}` }));
      if (index < steps.length - 1)
        shapes.push(lineShape(x + slot * 0.7, y1, x + slot * 0.85, y1, palette.muted, 1, "3 2"));
      shapes.push(textShape(layout.left + (index + 0.5) * slot, layout.bottom + 16, step.row.values.category, palette.muted, 9));
      tableRows.push([step.row.values.category, step.delta, step.end]);
    }
    shapes.push(lineShape(layout.left, baseline, layout.right, baseline, palette.grid));
  }
  if (type.id === "funnel") {
    const slot = layout.plotHeight / Math.max(1, rows.length), max = Math.max(...rows.map((row) => Number(row.values.value) || 0), 1);
    tableRows.length = 0;
    rows.forEach((row, index) => {
      const width = (Number(row.values.value) || 0) / max * layout.plotWidth * 0.82, nextValue = index < rows.length - 1 ? Number(rows[index + 1].values.value) : Number(row.values.value) * 0.72, nextWidth = Math.max(0, nextValue / max * layout.plotWidth * 0.82), x = layout.left + (layout.plotWidth - width) / 2, nextX = layout.left + (layout.plotWidth - nextWidth) / 2, y = layout.top + index * slot + 3, bottom = y + Math.max(1, slot - 6), d = `M ${x} ${y} L ${x + width} ${y} L ${nextX + nextWidth} ${bottom} L ${nextX} ${bottom} Z`;
      shapes.push(pathShape(d, "none", palette.series[index % palette.series.length], 0, { opacity: 0.78 }));
      shapes.push(textShape(layout.left - 8, y + slot / 2, row.values.stage, palette.muted, 9, "end"));
      tableRows.push([row.values.stage, row.values.value, index ? Number(row.values.value) / (Number(rows[index - 1].values.value) || 1) : null]);
    });
  }
  if (type.id === "radar") {
    const axes = categories(rows, "axis"), maximum = Math.max(...rows.map((row) => Number(row.values.value) || 0), 1), series = [...new Set(rows.map((row) => row.values.series ?? "Series 1"))];
    tableRows.length = 0;
    const radius = r;
    for (const [seriesIndex, name] of series.entries()) {
      const data = rows.filter((row) => (row.values.series ?? "Series 1") === name), points = axes.map((axis, index) => {
        const row = data.find((entry) => entry.values.axis === axis), angle = -Math.PI / 2 + Math.PI * 2 * index / axes.length, rr = radius * (Number(row?.values.value) || 0) / maximum;
        return polar(cx, cy, rr, angle);
      });
      shapes.push(pathShape(`${pathFor2(points)} Z`, palette.series[seriesIndex % palette.series.length], palette.series[seriesIndex % palette.series.length], 1, { opacity: 0.22 }));
      axes.forEach((axis, index) => {
        const position = polar(cx, cy, radius + 12, -Math.PI / 2 + Math.PI * 2 * index / axes.length);
        shapes.push(textShape(position.x, position.y, axis, palette.muted, 9));
      });
      for (const row of data)
        tableRows.push([name, row.values.axis, row.values.value]);
    }
  }
  const columns = type.id === "waterfall" ? ["Category", "Delta", "Total"] : type.id === "funnel" ? ["Stage", "Count", "Conversion"] : type.id === "radar" ? ["Series", "Axis", "Value"] : type.id === "sunburst" ? ["Path", "Value"] : type.id === "treemap" ? ["Path", "Value"] : type.id === "gauge" ? ["Value", "Target", "Minimum", "Maximum"] : ["Category", "Value", "Share"];
  const plotRows = tableRows.map((tableValues, index) => ({ index, values: {}, tableValues }));
  return { shapes, rows: plotRows, table: { columns, rows: tableRows }, diagnostics: [] };
}
function compileComposition(spec, type, palette, layout, rows = fieldRows(spec)) {
  return compileParts(spec, type, palette, layout, rows);
}

// dist/klic-chart-renderers/distribution.mjs
var value = (row) => Number(row.values.value);
var grouped = (rows) => {
  const groups = new Map;
  for (const row of rows) {
    const key = row.values.group ?? "All observations";
    if (!groups.has(key))
      groups.set(key, []);
    groups.get(key).push(row);
  }
  return [...groups.entries()];
};
var pathFor3 = (points) => points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
function compileDistribution(spec, type, palette, layout, rows = fieldRows(spec)) {
  const shapes = [], groups = grouped(rows), allValues = rows.map(value).filter(Number.isFinite), xDomain = paddedDomain(allValues), valueScale = (number) => scaleLinear(number, xDomain, [layout.left, layout.right]), groupSlot = layout.plotHeight / Math.max(1, groups.length), tableRows = [], tableColumns = [];
  const addAxis = () => {
    for (let index = 0;index <= 4; index++) {
      const x = layout.left + layout.plotWidth * index / 4;
      shapes.push(lineShape(x, layout.top, x, layout.bottom, palette.grid, 1));
      shapes.push(textShape(x, layout.bottom + 18, format(xDomain[0] + (xDomain[1] - xDomain[0]) * index / 4), palette.muted, 9));
    }
    shapes.push(lineShape(layout.left, layout.bottom, layout.right, layout.bottom, palette.grid));
  };
  addAxis();
  if (type.id === "histogram") {
    const binsCount = spec.chart.options?.bins ?? 12, rawBins = histogram(allValues, binsCount), max = Math.max(...rawBins.map((bin) => bin.count), 1), slot = layout.plotWidth / Math.max(1, rawBins.length);
    tableColumns.push("From", "To", "Count");
    rawBins.forEach((bin, index) => {
      const height = bin.count / max * layout.plotHeight;
      shapes.push(rectShape(layout.left + index * slot, layout.bottom - height, Math.max(1, slot - 1), height, palette.series[0]));
      tableRows.push([bin.x0, bin.x1, bin.count]);
    });
  } else if (type.id === "ecdf") {
    const points = ecdf(allValues), baseline = layout.bottom;
    tableColumns.push("Value", "Cumulative share");
    if (points.length) {
      let d = `M ${valueScale(points[0].x)} ${baseline}`;
      for (const point of points)
        d += ` V ${layout.bottom - point.y * layout.plotHeight} H ${valueScale(point.x)}`;
      shapes.push(pathShape(d, palette.series[0], "none", 2));
    }
    for (const point of points)
      tableRows.push([point.x, point.y]);
  } else if (type.id === "box-plot") {
    tableColumns.push("Group", "Minimum", "Q1", "Median", "Q3", "Maximum");
    const yScale = (value) => layout.top + (layout.plotHeight - (value - xDomain[0]) / (xDomain[1] - xDomain[0]) * layout.plotHeight);
    groups.forEach(([name, group], index) => {
      const values = group.map(value).filter(Number.isFinite), min = Math.min(...values), max = Math.max(...values), q1 = quantile(values, 0.25), median = quantile(values, 0.5), q3 = quantile(values, 0.75), y = layout.top + (index + 0.5) * groupSlot, x0 = valueScale(q1), x1 = valueScale(q3), xm = valueScale(median);
      shapes.push(lineShape(valueScale(min), y, valueScale(max), y, palette.series[index % palette.series.length], 2));
      shapes.push(rectShape(x0, y - groupSlot * 0.2, x1 - x0, groupSlot * 0.4, palette.series[index % palette.series.length], { opacity: 0.28, stroke: palette.series[index % palette.series.length] }));
      shapes.push(lineShape(xm, y - groupSlot * 0.2, xm, y + groupSlot * 0.2, palette.series[index % palette.series.length], 2));
      shapes.push(textShape(layout.left - 8, y + 3, name, palette.muted, 9, "end"));
      tableRows.push([name, min, q1, median, q3, max]);
    });
  } else if (type.id === "strip-plot" || type.id === "beeswarm") {
    tableColumns.push("Group", "Value");
    groups.forEach(([name, group], groupIndex) => {
      const center = layout.top + (groupIndex + 0.5) * groupSlot, radius = type.id === "beeswarm" ? 3.2 : 3;
      if (type.id === "beeswarm") {
        const placed = [], step = radius * 2 + 0.5, span = Math.max(0, groupSlot / 2 - radius), ordered = [...group].sort((a, b) => value(a) - value(b));
        for (const row of ordered) {
          const x = valueScale(value(row)), candidates = [0];
          for (let offset = step;offset <= span; offset += step)
            candidates.push(offset, -offset);
          const safe = candidates.find((offset) => placed.every((point) => Math.hypot(x - point.x, center + offset - point.y) >= step));
          const offset = safe ?? candidates.reduce((best, candidate) => {
            const collisions = placed.reduce((count, point) => count + (Math.hypot(x - point.x, center + candidate - point.y) < step ? 1 : 0), 0);
            return collisions < (best?.collisions ?? Infinity) ? { offset: candidate, collisions } : best;
          }, null)?.offset ?? 0;
          const y = center + offset;
          placed.push({ x, y });
          shapes.push(circleShape(x, y, radius, palette.series[groupIndex % palette.series.length], { opacity: 0.8 }));
          tableRows.push([name, value(row)]);
        }
      } else
        group.forEach((row, index) => {
          const jitter = (index % 5 - 2) * Math.min(5, groupSlot / 9), y = center + jitter;
          shapes.push(circleShape(valueScale(value(row)), y, radius, palette.series[groupIndex % palette.series.length], { opacity: 0.8 }));
          tableRows.push([name, value(row)]);
        });
      shapes.push(textShape(layout.left - 8, center + 3, name, palette.muted, 9, "end"));
    });
  } else if (type.id === "violin" || type.id === "ridgeline") {
    tableColumns.push("Group", "Minimum", "Q1", "Median", "Q3", "Maximum", "Sample size");
    groups.forEach(([name, group], groupIndex) => {
      const values = group.map(value).filter(Number.isFinite), density = kde(values), maxDensity = Math.max(...density.map((point) => point.y), 0.000000001), center = layout.top + (groupIndex + 0.5) * groupSlot, half = groupSlot * 0.4, upper = density.map((point) => ({ x: valueScale(point.x), y: center - point.y / maxDensity * half })), lower = density.slice().reverse().map((point) => ({ x: valueScale(point.x), y: center + point.y / maxDensity * half }));
      if (upper.length)
        shapes.push(pathShape(`${pathFor3(upper)} ${pathFor3(lower)} Z`, palette.series[groupIndex % palette.series.length], palette.series[groupIndex % palette.series.length], 1, { opacity: 0.26 }));
      const median = quantile(values, 0.5);
      shapes.push(lineShape(valueScale(median), center - half, valueScale(median), center + half, palette.series[groupIndex % palette.series.length], 2));
      shapes.push(textShape(layout.left - 8, center + 3, name, palette.muted, 9, "end"));
      tableRows.push([name, Math.min(...values), quantile(values, 0.25), median, quantile(values, 0.75), Math.max(...values), values.length]);
    });
  } else {
    tableColumns.push("Group", "Value", "Density");
    groups.forEach(([name, group], groupIndex) => {
      const values = group.map(value).filter(Number.isFinite), points = kde(values), maxDensity = Math.max(...points.map((point) => point.y), 0.000000001), center = layout.top + (groupIndex + 0.5) * groupSlot, scale = groupSlot * 0.78 / maxDensity;
      const curve = points.map((point) => ({ x: valueScale(point.x), y: center - point.y * scale }));
      if (curve.length)
        shapes.push(pathShape(pathFor3(curve), palette.series[groupIndex % palette.series.length], "none", 2));
      shapes.push(textShape(layout.left - 8, center + 3, name, palette.muted, 9, "end"));
      points.forEach((point) => tableRows.push([name, point.x, point.y]));
    });
  }
  if (!tableColumns.length)
    tableColumns.push("Value");
  const plotRows = tableRows.map((tableValues, index) => ({ index, values: {}, tableValues }));
  return { shapes, rows: plotRows, table: { columns: tableColumns, rows: tableRows }, diagnostics: [] };
}

// dist/klic-chart-renderers/flow-spatial.mjs
function compileFlowSpatial(spec, type, palette, layout, rows = fieldRows(spec)) {
  const shapes = [], tableRows = [];
  if (type.id === "sankey") {
    const links = rows.map((row) => ({ row, source: row.values.source, target: row.values.target, value: Math.max(0, Number(row.values.value) || 0) })), leftNodes = [...new Set(links.map((link) => link.source))], rightNodes = [...new Set(links.map((link) => link.target))], leftTotals = new Map(leftNodes.map((name) => [name, links.filter((link) => link.source === name).reduce((sum, link) => sum + link.value, 0)])), rightTotals = new Map(rightNodes.map((name) => [name, links.filter((link) => link.target === name).reduce((sum, link) => sum + link.value, 0)])), nodeWidth = Math.min(22, layout.plotWidth * 0.08), gap = 4, total = links.reduce((sum, link) => sum + link.value, 0), available = Math.max(1, layout.plotHeight - gap * Math.max(0, Math.max(leftNodes.length, rightNodes.length) - 1)), scale = total ? available / total : 0, position = new Map;
    const place = (names, totals, side) => {
      const heights = names.map((name) => (totals.get(name) || 0) * scale), occupied = heights.reduce((sum, height) => sum + height, 0) + gap * Math.max(0, names.length - 1);
      let cursor = layout.top + (layout.plotHeight - occupied) / 2;
      for (const [index, name] of names.entries()) {
        const height = heights[index], x = side === "left" ? layout.left : layout.right - nodeWidth;
        position.set(`${side === "left" ? "l" : "r"}:${name}`, { x, y: cursor + height / 2, height, color: palette.series[index % palette.series.length] });
        cursor += height + gap;
      }
    };
    place(leftNodes, leftTotals, "left");
    place(rightNodes, rightTotals, "right");
    const sourceCursor = new Map(leftNodes.map((name) => [name, position.get(`l:${name}`).y - position.get(`l:${name}`).height / 2])), targetCursor = new Map(rightNodes.map((name) => [name, position.get(`r:${name}`).y - position.get(`r:${name}`).height / 2]));
    for (const link of links) {
      const from = position.get(`l:${link.source}`), to = position.get(`r:${link.target}`);
      if (!from || !to)
        continue;
      const thickness = link.value * scale, y1 = (sourceCursor.get(link.source) ?? from.y) + thickness / 2, y2 = (targetCursor.get(link.target) ?? to.y) + thickness / 2;
      sourceCursor.set(link.source, (sourceCursor.get(link.source) ?? from.y) + thickness);
      targetCursor.set(link.target, (targetCursor.get(link.target) ?? to.y) + thickness);
      shapes.push({ kind: "path", d: `M ${from.x + nodeWidth} ${y1} C ${(from.x + to.x) / 2} ${y1}, ${(from.x + to.x) / 2} ${y2}, ${to.x} ${y2}`, stroke: palette.series[0], fill: "none", width: Math.max(0.5, thickness), opacity: 0.34 });
      tableRows.push([link.source, link.target, link.value]);
    }
    for (const name of leftNodes) {
      const node = position.get(`l:${name}`);
      shapes.push(rectShape(node.x, node.y - node.height / 2, nodeWidth, node.height, node.color, { radius: 3 }));
      shapes.push(textShape(node.x + nodeWidth + 5, node.y + 3, name, palette.text, 9, "start"));
    }
    for (const name of rightNodes) {
      const node = position.get(`r:${name}`);
      shapes.push(rectShape(node.x, node.y - node.height / 2, nodeWidth, node.height, node.color, { radius: 3 }));
      shapes.push(textShape(node.x - 5, node.y + 3, name, palette.text, 9, "end"));
    }
  } else if (type.id === "network-graph" || type.id === "tree") {
    const fromName = type.id === "tree" ? "parent" : "source", toName = type.id === "tree" ? "child" : "target", nodes = [...new Set(rows.flatMap((row) => [row.values[fromName], row.values[toName]]))], cx = (layout.left + layout.right) / 2, cy = (layout.top + layout.bottom) / 2, r = Math.min(layout.plotWidth, layout.plotHeight) * 0.36, positions = new Map;
    if (type.id === "tree") {
      const childSet = new Set(rows.map((row) => row.values[toName])), roots = nodes.filter((node) => !childSet.has(node)), level = new Map(roots.map((node) => [node, 0]));
      for (let pass = 0;pass < nodes.length; pass++)
        for (const row of rows) {
          const parentLevel = level.get(row.values[fromName]);
          if (parentLevel !== undefined && !level.has(row.values[toName]))
            level.set(row.values[toName], parentLevel + 1);
        }
      for (const node of nodes)
        if (!level.has(node))
          level.set(node, 0);
      const maxLevel = Math.max(...level.values(), 1), byLevel = new Map;
      for (const node of nodes) {
        const depth = level.get(node);
        if (!byLevel.has(depth))
          byLevel.set(depth, []);
        byLevel.get(depth).push(node);
      }
      for (const [depth, items] of byLevel)
        items.forEach((name, index) => positions.set(name, { x: layout.left + 24 + (maxLevel ? depth / maxLevel : 0) * (layout.plotWidth - 48), y: layout.top + (index + 1) * layout.plotHeight / (items.length + 1) }));
    } else
      nodes.forEach((name, index) => positions.set(name, { x: cx + r * Math.cos(index / nodes.length * Math.PI * 2 - Math.PI / 2), y: cy + r * Math.sin(index / nodes.length * Math.PI * 2 - Math.PI / 2) }));
    rows.forEach((row) => {
      const from = positions.get(row.values[fromName]), to = positions.get(row.values[toName]);
      if (from && to)
        shapes.push(lineShape(from.x, from.y, to.x, to.y, palette.grid, Math.min(5, Number(row.values.weight) || 1)));
      tableRows.push([row.values[fromName], row.values[toName], row.values.weight ?? 1]);
    });
    nodes.forEach((name, index) => {
      const point = positions.get(name);
      shapes.push(circleShape(point.x, point.y, 9, palette.series[index % palette.series.length]));
      shapes.push(textShape(point.x, point.y - 14, name, palette.text, 9));
    });
  } else {
    const features = spec.geometry?.features ?? [], valueByRegion = new Map(rows.map((row) => [String(row.values.region), Number(row.values.value)]));
    const points = [];
    for (const feature of features) {
      const geometry = feature.geometry, polys = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
      for (const polygon of polys)
        for (const ring of polygon)
          for (const point of ring)
            points.push(point);
    }
    const xs = points.map((point) => point[0]), ys = points.map((point) => point[1]), minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys), pad = 14, innerW = layout.plotWidth - pad * 2, innerH = layout.plotHeight - pad * 2, scale = Math.min(innerW / (maxX - minX || 1), innerH / (maxY - minY || 1)), usedW = (maxX - minX) * scale, usedH = (maxY - minY) * scale, offsetX = layout.left + pad + (innerW - usedW) / 2, offsetY = layout.top + pad + (innerH - usedH) / 2;
    const project = (point) => ({ x: offsetX + (point[0] - minX) * scale, y: offsetY + (maxY - point[1]) * scale }), values = [...valueByRegion.values()].filter(Number.isFinite), domain = paddedDomain(values);
    for (const feature of features) {
      const region = String(feature.id), value = valueByRegion.get(region), polys = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates, color = type.id === "map" ? palette.series[0] : Number.isFinite(value) ? palette.series[Math.max(0, Math.min(palette.series.length - 1, Math.round((value - domain[0]) / (domain[1] - domain[0] || 1) * (palette.series.length - 1))))] : palette.grid;
      for (const polygon of polys) {
        const commands = polygon.map((ring) => ring.map((point, index) => {
          const projected = project(point);
          return `${index ? "L" : "M"} ${projected.x} ${projected.y}`;
        }).join(" ") + " Z").join(" ");
        shapes.push({ kind: "path", d: commands, fill: color, stroke: palette.background, width: 1, opacity: 0.78, fillRule: "evenodd" });
      }
      tableRows.push(type.id === "choropleth" ? [region, value ?? "—"] : [region, "Polygon"]);
    }
    const columns = type.id === "choropleth" ? ["Region", "Value"] : ["Region", "Geometry type"];
    return { shapes, rows: tableRows.map((tableValues, index) => ({ index, values: {}, tableValues })), table: { columns, rows: tableRows }, diagnostics: [] };
  }
  const columns = type.id === "sankey" ? ["Source", "Target", "Value"] : type.id === "tree" ? ["Parent", "Child", "Link value"] : ["Source", "Target", "Weight"];
  return { shapes, rows: tableRows.map((tableValues, index) => ({ index, values: {}, tableValues })), table: { columns, rows: tableRows }, diagnostics: [] };
}

// dist/klic-chart-renderers/matrix.mjs
function dateValue(value) {
  if (typeof value === "number")
    return value;
  const result = Date.parse(value);
  return Number.isFinite(result) ? result : null;
}
function compileMatrix(spec, type, palette, layout, rows = fieldRows(spec)) {
  const xName = type.id === "cohort-heatmap" ? "period" : type.id === "calendar-heatmap" ? "date" : "x", yName = type.id === "cohort-heatmap" ? "cohort" : "y", valueName = "value", shapes = [], tableRows = [];
  const values = rows.map((row) => Number(row.values[valueName])).filter(Number.isFinite), domain = type.id === "correlation-matrix" ? [-1, 1] : paddedDomain(values), xCategories = type.id === "calendar-heatmap" ? [] : categories(rows, xName), yCategories = type.id === "calendar-heatmap" ? [] : categories(rows, yName);
  if (type.id === "calendar-heatmap") {
    const start = rows.map((row) => dateValue(row.values.date)).filter(Number.isFinite);
    if (start.length) {
      const min = Math.min(...start), max = Math.max(...start), day = 86400000, days = Math.round((max - min) / day) + 1, firstWeekday = new Date(min).getUTCDay(), weeks = Math.ceil((firstWeekday + days) / 7), cell = Math.min(18, layout.plotWidth / Math.max(1, weeks)), xOffset = layout.left + (layout.plotWidth - weeks * cell) / 2;
      for (const row of rows) {
        const time = dateValue(row.values.date);
        if (!Number.isFinite(time))
          continue;
        const index = Math.round((time - min) / day), date = new Date(time), week = Math.floor((firstWeekday + index) / 7), x = xOffset + week * cell, y = layout.top + date.getUTCDay() * cell, color = palette.series[Math.round(Math.max(0, Math.min(1, (Number(row.values.value) - domain[0]) / (domain[1] - domain[0] || 1))) * (palette.series.length - 1))];
        shapes.push(rectShape(x, y, cell - 2, cell - 2, color));
        tableRows.push([date.toISOString().slice(0, 10), row.values.value]);
      }
      for (let index = 0;index < 7; index++)
        shapes.push(textShape(xOffset - 6, layout.top + (index + 0.7) * cell, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index], palette.muted, 8, "end"));
    }
  } else {
    const cellWidth = layout.plotWidth / Math.max(1, xCategories.length), cellHeight = layout.plotHeight / Math.max(1, yCategories.length);
    rows.forEach((row) => {
      const xIndex = xCategories.indexOf(row.values[xName]), yIndex = yCategories.indexOf(row.values[yName]), value = Number(row.values[valueName]);
      if (xIndex < 0 || yIndex < 0 || !Number.isFinite(value))
        return;
      const t = (value - domain[0]) / (domain[1] - domain[0] || 1), paletteIndex = Math.max(0, Math.min(palette.series.length - 1, Math.round(t * (palette.series.length - 1))));
      shapes.push(rectShape(layout.left + xIndex * cellWidth + 1, layout.top + yIndex * cellHeight + 1, Math.max(1, cellWidth - 2), Math.max(1, cellHeight - 2), palette.series[paletteIndex], { opacity: 0.86 }));
      tableRows.push([row.values[xName], row.values[yName], value]);
    });
    xCategories.forEach((value, index) => shapes.push(textShape(layout.left + (index + 0.5) * cellWidth, layout.bottom + 15, value, palette.muted, 9)));
    yCategories.forEach((value, index) => shapes.push(textShape(layout.left - 8, layout.top + (index + 0.5) * cellHeight + 3, value, palette.muted, 9, "end")));
  }
  const columns = type.id === "calendar-heatmap" ? ["Date", "Value"] : ["X", "Y", "Value"], table = tableFromRows(tableRows, columns, (row) => row);
  return { shapes, rows: tableRows.map((tableValues, index) => ({ index, values: {}, tableValues })), table, diagnostics: [] };
}

// dist/klic-chart-renderers/timeline.mjs
var stamp = (value) => typeof value === "number" ? value : Date.parse(value);
function compileTimeline(spec, type, palette, layout, rows = fieldRows(spec)) {
  const taskName = type.id === "gantt" ? "task" : "state", tasks = [...new Set(rows.map((row) => row.values[taskName]))], times = rows.flatMap((row) => [stamp(row.values.start), stamp(row.values.end)]).filter(Number.isFinite), min = Math.min(...times), max = Math.max(...times), span = max - min || 1, xFor = (value) => scaleLinear(stamp(value), [min, max], [layout.left, layout.right]), slot = layout.plotHeight / Math.max(1, tasks.length), shapes = [], tableRows = [];
  rows.forEach((row, index) => {
    const task = row.values[taskName], taskIndex = tasks.indexOf(task), start = xFor(row.values.start), end = xFor(row.values.end), y = layout.top + (taskIndex + 0.5) * slot, color = palette.series[index % palette.series.length];
    shapes.push(rectShape(Math.min(start, end), y - slot * 0.25, Math.max(2, Math.abs(end - start)), slot * 0.5, color, { opacity: 0.78 }));
    shapes.push(textShape(layout.left - 8, y + 3, task, palette.muted, 9, "end"));
    tableRows.push([task, row.values.start, row.values.end, Math.max(0, (stamp(row.values.end) - stamp(row.values.start)) / 3600000)]);
  });
  for (let index = 0;index <= 4; index++) {
    const x = layout.left + layout.plotWidth * index / 4, stampValue = min + (max - min) * index / 4;
    shapes.push(lineShape(x, layout.top, x, layout.bottom, palette.grid));
    shapes.push(textShape(x, layout.bottom + 16, new Date(stampValue).toISOString().slice(0, 10), palette.muted, 8));
  }
  return { shapes, rows: tableRows.map((tableValues, index) => ({ index, values: {}, tableValues })), table: { columns: ["Task", "Start", "End", "Duration hours"], rows: tableRows }, diagnostics: [] };
}

// dist/klic-chart-runtime.mjs
var own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
var isRecord = (value) => !!value && typeof value === "object" && !Array.isArray(value);
var scalar2 = (value) => value === null || typeof value === "string" || typeof value === "boolean" || typeof value === "number";
var geometryTypes = new Set(["map", "choropleth"]);
var coordinateLimit = 50000;
var textEncoder = new TextEncoder;
var path = (value) => String(value || "").replace(/\[(\d+)\]/g, ".$1").replace(/^\./, "");
function add(errors, where, code, message) {
  errors.push({ path: path(where), code, message });
}
function rejectUnknown(value, allowed, where, errors) {
  if (!isRecord(value))
    return;
  for (const key of Object.keys(value))
    if (!allowed.includes(key))
      add(errors, where ? `${where}.${key}` : key, "UNKNOWN_PROPERTY", `Unexpected property: ${key}.`);
}
function inferredKind(value) {
  if (typeof value === "boolean")
    return "categorical";
  if (typeof value === "number")
    return "quantitative";
  if (typeof value === "string" && /^\d{4}-\d{2}(?:-\d{2})?(?:[T ].*)?$/.test(value) && Number.isFinite(Date.parse(value)))
    return "temporal";
  return typeof value === "string" ? "categorical" : null;
}
function matchesKind(value, kind) {
  if (value === null)
    return true;
  switch (kind) {
    case "categorical":
      return typeof value === "string" || typeof value === "boolean";
    case "ordinal":
      return typeof value === "string" || typeof value === "number" && Number.isFinite(value);
    case "quantitative":
      return typeof value === "number" && Number.isFinite(value);
    case "temporal":
      return typeof value === "number" && Number.isFinite(value) || typeof value === "string" && /^\d{4}-\d{2}(?:-\d{2})?(?:[T ].*)?$/.test(value) && Number.isFinite(Date.parse(value));
    default:
      return false;
  }
}
function validateGeometry(geometry, errors) {
  if (!isRecord(geometry) || geometry.type !== "FeatureCollection" || !Array.isArray(geometry.features)) {
    add(errors, "geometry", "INVALID_GEOMETRY", "geometry must be an inline FeatureCollection.");
    return;
  }
  rejectUnknown(geometry, ["type", "features"], "geometry", errors);
  if (geometry.features.length < 1)
    add(errors, "geometry.features", "INVALID_GEOMETRY", "FeatureCollection needs at least one Polygon or MultiPolygon feature.");
  if (geometry.features.length > 2000)
    add(errors, "geometry.features", "LIMIT_EXCEEDED", "Geometry is limited to 2,000 features.");
  let positions = 0;
  for (const [featureIndex, feature] of geometry.features.entries()) {
    const base = `geometry.features[${featureIndex}]`;
    if (!isRecord(feature) || feature.type !== "Feature" || typeof feature.id !== "string" || !isRecord(feature.properties) || !isRecord(feature.geometry)) {
      add(errors, base, "INVALID_FEATURE", "Each feature needs a string id, properties object, and Polygon or MultiPolygon geometry.");
      continue;
    }
    rejectUnknown(feature, ["type", "id", "properties", "geometry"], base, errors);
    if (feature.id.length > 120)
      add(errors, `${base}.id`, "INVALID_FEATURE", "Feature IDs are limited to 120 characters.");
    rejectUnknown(feature.geometry, ["type", "coordinates"], `${base}.geometry`, errors);
    for (const [name, value] of Object.entries(feature.properties))
      if (value !== null && typeof value !== "string" && !(typeof value === "number" && Number.isFinite(value)))
        add(errors, `${base}.properties.${name}`, "INVALID_VALUE", "Geometry properties must be strings, finite numbers, or null.");
    if (!["Polygon", "MultiPolygon"].includes(feature.geometry.type)) {
      add(errors, `${base}.geometry.type`, "INVALID_GEOMETRY", "Only Polygon and MultiPolygon are accepted.");
      continue;
    }
    const polygons = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    if (!Array.isArray(polygons)) {
      add(errors, `${base}.geometry.coordinates`, "INVALID_GEOMETRY", "Expected polygon coordinate arrays.");
      continue;
    }
    for (const polygon of polygons) {
      if (!Array.isArray(polygon)) {
        add(errors, `${base}.geometry.coordinates`, "INVALID_GEOMETRY", "Expected polygon rings.");
        continue;
      }
      for (const ring of polygon) {
        if (!Array.isArray(ring)) {
          add(errors, `${base}.geometry.coordinates`, "INVALID_GEOMETRY", "Expected coordinate rings.");
          continue;
        }
        if (ring.length < 4)
          add(errors, `${base}.geometry.coordinates`, "INVALID_GEOMETRY", "Polygon rings need at least four positions.");
        for (const point of ring) {
          positions++;
          if (!Array.isArray(point) || point.length !== 2 || !Number.isFinite(point[0]) || !Number.isFinite(point[1]) || point[0] < -180 || point[0] > 180 || point[1] < -90 || point[1] > 90)
            add(errors, `${base}.geometry.coordinates`, "INVALID_COORDINATE", "Coordinates must be finite longitude/latitude pairs within geographic bounds.");
        }
        const first = ring[0], last = ring.at(-1);
        if (Array.isArray(first) && Array.isArray(last) && (first[0] !== last[0] || first[1] !== last[1]))
          add(errors, `${base}.geometry.coordinates`, "INVALID_GEOMETRY", "Polygon rings must be closed.");
      }
    }
  }
  if (positions > coordinateLimit)
    add(errors, "geometry.features", "LIMIT_EXCEEDED", "Map geometry is limited to 50,000 coordinate positions.");
}
function validateOptions(options, definition, errors) {
  if (options === undefined)
    return;
  if (!isRecord(options)) {
    add(errors, "chart.options", "INVALID_TYPE", "chart.options must be an object.");
    return;
  }
  for (const [name, value] of Object.entries(options)) {
    const rule = definition.options?.[name], where = `chart.options.${name}`;
    if (!rule) {
      add(errors, where, "UNKNOWN_OPTION", `Unknown option for ${definition.id}: ${name}.`);
      continue;
    }
    if (rule.enum && !rule.enum.includes(value))
      add(errors, where, "INVALID_OPTION", `Choose one of: ${rule.enum.join(", ")}.`);
    if (rule.integer && (!Number.isInteger(value) || value < rule.min || value > rule.max))
      add(errors, where, "INVALID_OPTION", `Value must be an integer from ${rule.min} to ${rule.max}.`);
    if (rule.number && (typeof value !== "number" || !Number.isFinite(value)))
      add(errors, where, "INVALID_OPTION", "Value must be finite.");
    if (rule.type === "string" && (typeof value !== "string" || value.length > 120))
      add(errors, where, "INVALID_OPTION", "Value must be a string up to 120 characters.");
    if (rule.stringArray && (!Array.isArray(value) || value.length < rule.min || value.length > rule.max || value.some((item) => typeof item !== "string")))
      add(errors, where, "INVALID_OPTION", `Value must contain ${rule.min}–${rule.max} field names.`);
  }
}
function validateChannels(spec, definition, errors) {
  const encodings = spec.chart.encodings;
  if (!isRecord(encodings)) {
    add(errors, "chart.encodings", "INVALID_TYPE", "chart.encodings must map channels to fields.");
    return;
  }
  if (Object.keys(encodings).length > 16)
    add(errors, "chart.encodings", "LIMIT_EXCEEDED", "A chart can encode at most 16 channels.");
  const allowed = new Map(definition.channels.map((item) => [item.name, item]));
  for (const [name, field] of Object.entries(encodings)) {
    const rule = allowed.get(name);
    if (!rule) {
      add(errors, `chart.encodings.${name}`, "UNKNOWN_CHANNEL", `Channel is not supported by ${definition.id}.`);
      continue;
    }
    if (typeof field !== "string" || !field) {
      add(errors, `chart.encodings.${name}`, "INVALID_FIELD", "Encoding must name a field in data.rows.");
      continue;
    }
    const has = spec.data.rows.some((row) => isRecord(row) && own(row, field));
    if (!has) {
      add(errors, `chart.encodings.${name}`, "UNKNOWN_FIELD", `Field ${field} is missing from data.rows.`);
      continue;
    }
    const declared = spec.fields?.[field]?.kind, acceptedKinds = rule.kinds ?? [rule.kind];
    let hasValue = false, implicitKind = null;
    for (const [rowIndex, row] of spec.data.rows.entries()) {
      if (!own(row, field) || row[field] === null)
        continue;
      hasValue = true;
      implicitKind ??= inferredKind(row[field]);
      if (!scalar2(row[field]) || typeof row[field] === "number" && !Number.isFinite(row[field]))
        add(errors, `data.rows[${rowIndex}].${field}`, "INVALID_VALUE", "Values must be strings, booleans, null, or finite numbers.");
      else if (!matchesKind(row[field], declared ?? implicitKind ?? rule.kind))
        add(errors, `data.rows[${rowIndex}].${field}`, "FIELD_KIND_MISMATCH", `Field ${field} must contain ${declared ?? implicitKind ?? rule.kind} values.`);
    }
    if (!hasValue)
      add(errors, `chart.encodings.${name}`, "EMPTY_FIELD", `Field ${field} has no usable values.`);
    const actualKind = declared ?? implicitKind;
    if (actualKind && !acceptedKinds.includes(actualKind))
      add(errors, `fields.${field}${declared ? ".kind" : ""}`, "FIELD_KIND_MISMATCH", `Channel ${name} requires a ${acceptedKinds.join(" or ")} field.`);
  }
  for (const rule of definition.channels)
    if (rule.required && !own(encodings, rule.name))
      add(errors, `chart.encodings.${rule.name}`, "MISSING_CHANNEL", `Channel ${rule.name} is required by ${definition.id}.`);
  if (definition.id === "combo" && own(encodings, "y2")) {
    const primaryUnit = spec.fields?.[encodings.y]?.unit, secondaryUnit = spec.fields?.[encodings.y2]?.unit;
    if (typeof primaryUnit === "string" && typeof secondaryUnit === "string" && primaryUnit !== secondaryUnit)
      add(errors, "chart.encodings.y2", "INCOMPATIBLE_UNITS", "Combo charts use one shared y scale; y and y2 must declare the same unit.");
  }
  const nonNegativeValueChannels = { pie: "value", donut: "value", radial: "value", rose: "value", treemap: "value", sunburst: "value", funnel: "value", sankey: "value", "market-depth": "quantity", orderbook: "quantity" };
  const nonNegativeChannel = nonNegativeValueChannels[definition.id];
  if (nonNegativeChannel && typeof encodings[nonNegativeChannel] === "string") {
    const field = encodings[nonNegativeChannel];
    for (const [rowIndex, row] of spec.data.rows.entries())
      if (isRecord(row) && typeof row[field] === "number" && row[field] < 0)
        add(errors, `data.rows[${rowIndex}].${field}`, "NEGATIVE_VALUE", `${definition.id} requires non-negative ${nonNegativeChannel} values.`);
  }
  if (definition.id === "candlestick" && ["open", "high", "low", "close"].every((name) => typeof encodings[name] === "string")) {
    const fields = Object.fromEntries(["open", "high", "low", "close"].map((name) => [name, encodings[name]]));
    for (const [rowIndex, row] of spec.data.rows.entries())
      if (isRecord(row) && Object.values(fields).every((field) => typeof row[field] === "number" && Number.isFinite(row[field]))) {
        const { open, high, low, close } = Object.fromEntries(Object.entries(fields).map(([name, field]) => [name, row[field]]));
        if (low > Math.min(open, close) || high < Math.max(open, close) || low > high)
          add(errors, `data.rows[${rowIndex}]`, "INVALID_OHLC", "Candlestick rows must satisfy low ≤ min(open, close) ≤ max(open, close) ≤ high.");
      }
  }
  if (["range-area", "forecast-fan"].includes(definition.id) && typeof encodings.low === "string" && typeof encodings.high === "string") {
    for (const [rowIndex, row] of spec.data.rows.entries())
      if (isRecord(row) && typeof row[encodings.low] === "number" && typeof row[encodings.high] === "number" && row[encodings.low] > row[encodings.high])
        add(errors, `data.rows[${rowIndex}]`, "INVALID_RANGE", "The low channel must not exceed the high channel.");
  }
  if (definition.id === "correlation-matrix" && typeof encodings.value === "string") {
    for (const [rowIndex, row] of spec.data.rows.entries())
      if (isRecord(row) && typeof row[encodings.value] === "number" && (row[encodings.value] < -1 || row[encodings.value] > 1))
        add(errors, `data.rows[${rowIndex}].${encodings.value}`, "INVALID_CORRELATION", "Correlation values must be between -1 and 1.");
  }
  if (definition.id === "parallel-coordinates") {
    const dimensions = Object.keys(encodings).filter((name) => /^dimension[1-8]$/.test(name));
    if (dimensions.length < 3)
      add(errors, "chart.encodings", "MISSING_CHANNEL", "Parallel coordinates requires at least three dimensions.");
    for (let index = 1;index < dimensions.length; index++)
      if (!dimensions.includes(`dimension${index + 1}`))
        add(errors, "chart.encodings", "INVALID_CHANNELS", "Dimension channels must be consecutive from dimension1.");
  }
  for (const [field, descriptor] of Object.entries(isRecord(spec.fields) ? spec.fields : {})) {
    if (!isRecord(descriptor) || !["categorical", "ordinal", "quantitative", "temporal"].includes(descriptor.kind))
      add(errors, `fields.${field}`, "INVALID_FIELD", "Field semantics must declare a supported kind.");
    rejectUnknown(descriptor, ["kind", "label", "unit", "domain"], `fields.${field}`, errors);
    if (descriptor?.label !== undefined && (typeof descriptor.label !== "string" || descriptor.label.length > 120))
      add(errors, `fields.${field}.label`, "INVALID_FIELD", "Field labels must be strings up to 120 characters.");
    if (descriptor?.unit !== undefined && (typeof descriptor.unit !== "string" || descriptor.unit.length > 40))
      add(errors, `fields.${field}.unit`, "INVALID_FIELD", "Field units must be strings up to 40 characters.");
    if (descriptor?.domain !== undefined && (!Array.isArray(descriptor.domain) || descriptor.domain.length !== 2 || descriptor.domain.some((value) => typeof value !== "number" && typeof value !== "string")))
      add(errors, `fields.${field}.domain`, "INVALID_DOMAIN", "Field domain must contain two scalar values.");
  }
  for (const [index, interaction] of (Array.isArray(spec.interactions) ? spec.interactions : []).entries()) {
    if (!isRecord(interaction) || !definition.interactions.includes(interaction.type)) {
      add(errors, `interactions[${index}].type`, "UNSUPPORTED_INTERACTION", `Interaction is not supported by ${definition.id}.`);
      continue;
    }
  }
}
function validateKlicChart(spec) {
  const errors = [];
  if (!isRecord(spec)) {
    add(errors, "", "INVALID_TYPE", "Chart spec must be an object.");
    return { valid: false, errors };
  }
  rejectUnknown(spec, ["schemaVersion", "data", "geometry", "fields", "chart", "display", "interactions"], "", errors);
  let bytes;
  try {
    bytes = textEncoder.encode(JSON.stringify(spec)).byteLength;
  } catch {
    bytes = Infinity;
  }
  if (bytes > 1048576)
    add(errors, "", "LIMIT_EXCEEDED", "Chart spec is limited to 1 MiB.");
  if (spec.schemaVersion !== "1.0")
    add(errors, "schemaVersion", "UNSUPPORTED_VERSION", "schemaVersion must be 1.0.");
  if (!isRecord(spec.data) || !Array.isArray(spec.data.rows))
    add(errors, "data.rows", "INVALID_TYPE", "data.rows must be an array.");
  else {
    rejectUnknown(spec.data, ["rows"], "data", errors);
    if (spec.data.rows.length < 1 || spec.data.rows.length > 5000)
      add(errors, "data.rows", "LIMIT_EXCEEDED", "Charts need 1–5,000 rows.");
    for (const [index, row] of spec.data.rows.entries()) {
      if (!isRecord(row) || Object.keys(row).length < 1 || Object.keys(row).length > 64) {
        add(errors, `data.rows[${index}]`, "INVALID_ROW", "Each row must be an object with 1–64 fields.");
        continue;
      }
      for (const [name, value] of Object.entries(row))
        if (!scalar2(value) || typeof value === "number" && !Number.isFinite(value))
          add(errors, `data.rows[${index}].${name}`, "INVALID_VALUE", "Values must be strings, booleans, null, or finite numbers.");
    }
  }
  if (!isRecord(spec.chart)) {
    add(errors, "chart", "INVALID_TYPE", "chart must be an object.");
    return { valid: false, errors };
  }
  rejectUnknown(spec.chart, ["type", "encodings", "options"], "chart", errors);
  const definition = KLIC_CHART_TYPES[spec.chart.type];
  if (!definition)
    add(errors, "chart.type", "UNKNOWN_CHART_TYPE", `Unknown KLIC chart type: ${String(spec.chart.type)}.`);
  if (spec.chart.options !== undefined && definition)
    validateOptions(spec.chart.options, definition, errors);
  if (spec.fields !== undefined && !isRecord(spec.fields))
    add(errors, "fields", "INVALID_TYPE", "fields must be an object.");
  if (isRecord(spec.chart) && definition && isRecord(spec.data) && Array.isArray(spec.data.rows))
    validateChannels(spec, definition, errors);
  if (spec.display !== undefined) {
    if (!isRecord(spec.display))
      add(errors, "display", "INVALID_TYPE", "display must be an object.");
    else {
      rejectUnknown(spec.display, ["title", "subtitle", "width", "height", "profile", "mode"], "display", errors);
      if (spec.display.title !== undefined && (typeof spec.display.title !== "string" || spec.display.title.length > 200))
        add(errors, "display.title", "INVALID_OPTION", "title must be a string up to 200 characters.");
      if (spec.display.subtitle !== undefined && (typeof spec.display.subtitle !== "string" || spec.display.subtitle.length > 300))
        add(errors, "display.subtitle", "INVALID_OPTION", "subtitle must be a string up to 300 characters.");
      for (const dimension of ["width", "height"])
        if (spec.display[dimension] !== undefined && (!Number.isInteger(spec.display[dimension]) || spec.display[dimension] < (dimension === "width" ? 240 : 180) || spec.display[dimension] > 4000))
          add(errors, `display.${dimension}`, "LIMIT_EXCEEDED", `${dimension} is outside the supported range.`);
      if (spec.display.profile !== undefined && !["core", "studio", "data"].includes(spec.display.profile))
        add(errors, "display.profile", "INVALID_OPTION", "profile must be core, studio, or data.");
      if (spec.display.mode !== undefined && !["light", "dark"].includes(spec.display.mode))
        add(errors, "display.mode", "INVALID_OPTION", "mode must be light or dark.");
    }
  }
  if (spec.geometry !== undefined) {
    if (!definition || !geometryTypes.has(definition.id))
      add(errors, "geometry", "UNSUPPORTED_GEOMETRY", "Inline GeoJSON is only accepted by map chart types.");
    else
      validateGeometry(spec.geometry, errors);
  }
  if (definition && geometryTypes.has(definition.id) && spec.geometry === undefined)
    add(errors, "geometry", "MISSING_GEOMETRY", "Map charts require inline Polygon or MultiPolygon geometry.");
  if (spec.interactions !== undefined && !Array.isArray(spec.interactions))
    add(errors, "interactions", "INVALID_TYPE", "interactions must be an array.");
  if (Array.isArray(spec.interactions) && spec.interactions.length > 2)
    add(errors, "interactions", "LIMIT_EXCEEDED", "Charts can declare at most two interactions.");
  return { valid: errors.length === 0, errors };
}
function paletteFor(spec) {
  const mode = spec.display?.mode === "dark" ? "dark" : "light", profile = spec.display?.profile ?? "core", theme = KLIC_CHART_THEMES[mode];
  if (profile !== "data")
    return theme;
  return { ...theme, series: [theme.series[0], theme.series[2], theme.series[1], theme.series[4], theme.series[3], theme.series[5]] };
}
var toSafeNumber = (value) => Number.isFinite(value) ? Number(value.toFixed(2)) : 0;
var escapeXml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
function shapeMarkup(shape) {
  const n = toSafeNumber, value = escapeXml;
  if (shape.kind === "line")
    return `<line x1="${n(shape.x1)}" y1="${n(shape.y1)}" x2="${n(shape.x2)}" y2="${n(shape.y2)}" stroke="${value(shape.stroke)}" stroke-width="${n(shape.width ?? 1)}"${shape.dash ? ` stroke-dasharray="${value(shape.dash)}"` : ""}/>`;
  if (shape.kind === "rect")
    return `<rect x="${n(shape.x)}" y="${n(shape.y)}" width="${n(shape.width)}" height="${n(shape.height)}" rx="${n(shape.radius ?? 0)}" fill="${value(shape.fill)}" stroke="${value(shape.stroke ?? "none")}" opacity="${n(shape.opacity ?? 1)}">${shape.title ? `<title>${value(shape.title)}</title>` : ""}</rect>`;
  if (shape.kind === "circle")
    return `<circle cx="${n(shape.cx)}" cy="${n(shape.cy)}" r="${n(shape.r)}" fill="${value(shape.fill)}" opacity="${n(shape.opacity ?? 1)}"/>`;
  if (shape.kind === "path")
    return `<path d="${value(shape.d)}" fill="${value(shape.fill ?? "none")}" stroke="${value(shape.stroke ?? "none")}" stroke-width="${n(shape.width ?? 1)}" opacity="${n(shape.opacity ?? 1)}"${shape.fillRule ? ` fill-rule="${value(shape.fillRule)}"` : ""}/>`;
  if (shape.kind === "text") {
    const rotate = shape.rotate ? ` transform="rotate(${n(shape.rotate)} ${n(shape.x)} ${n(shape.y)})"` : "";
    return `<text x="${n(shape.x)}" y="${n(shape.y)}" fill="${value(shape.fill)}" font-size="${n(shape.size ?? 11)}" font-weight="${n(shape.weight ?? 400)}" text-anchor="${value(shape.anchor ?? "middle")}"${rotate}>${value(shape.text)}</text>`;
  }
  return "";
}
function compileKlicChart(spec) {
  const validation = validateKlicChart(spec);
  if (!validation.valid)
    return { valid: false, errors: validation.errors };
  const type = KLIC_CHART_TYPES[spec.chart.type], display = { title: spec.display?.title ?? type.id, subtitle: spec.display?.subtitle ?? "", width: spec.display?.width ?? 800, height: spec.display?.height ?? 420, profile: spec.display?.profile ?? "core", mode: spec.display?.mode ?? "light" }, normalized = { ...spec, display }, palette = paletteFor(normalized), layout = layoutFor(normalized);
  const missing = spec.data.rows.filter((row) => type.channels.filter((channel) => channel.required).some((channel) => row[spec.chart.encodings[channel.name]] === null || row[spec.chart.encodings[channel.name]] === undefined));
  const usableRows = spec.data.rows.filter((row) => !type.channels.filter((channel) => channel.required).some((channel) => row[spec.chart.encodings[channel.name]] === null || row[spec.chart.encodings[channel.name]] === undefined));
  const usableSpec = { ...normalized, data: { ...normalized.data, rows: usableRows } };
  let rendered;
  if (type.family === "cartesian" || type.family === "market" || type.family === "table")
    rendered = compileCartesian(usableSpec, type, palette, layout);
  else if (type.family === "distribution")
    rendered = compileDistribution(usableSpec, type, palette, layout);
  else if (type.family === "composition" || type.family === "polar")
    rendered = compileComposition(usableSpec, type, palette, layout);
  else if (type.family === "matrix")
    rendered = compileMatrix(usableSpec, type, palette, layout);
  else if (type.family === "timeline")
    rendered = compileTimeline(usableSpec, type, palette, layout);
  else
    rendered = compileFlowSpatial(usableSpec, type, palette, layout);
  if (rendered.shapes.length > 1e4)
    return { valid: false, errors: [{ path: "data.rows", code: "MARK_LIMIT_EXCEEDED", message: "Compiled chart exceeds 10,000 SVG marks." }] };
  const diagnostics = missing.length ? [`Omitted ${missing.length} row(s) with missing required values.`] : [];
  const plotData = { rows: rendered.rows, shapes: rendered.shapes, markCount: rendered.shapes.length, sourceRowCount: spec.data.rows.length, renderedRowCount: usableRows.length, omittedRowCount: missing.length };
  const table = { caption: display.title, columns: rendered.table.columns, rows: rendered.table.rows };
  return { valid: true, schemaVersion: "1.0", type: type.id, family: type.family, display, palette, layout, plotData, table, diagnostics, interactions: (spec.interactions || []).map((interaction) => interaction.type), keyboard: type.keyboard, reducedMotion: type.reducedMotion, summary: { title: display.title, type: type.id, rows: usableRows.length, omittedRows: missing.length, marks: rendered.shapes.length } };
}
function renderKlicChartSvg(compiled) {
  if (!compiled?.valid || !Array.isArray(compiled.plotData?.shapes))
    throw new TypeError("renderKlicChartSvg requires a valid compiled KLIC chart.");
  const { width, height } = compiled.display, title = compiled.display.title, subtitle = compiled.display.subtitle, palette = compiled.palette, shapes = compiled.plotData.shapes;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(title)}"><title>${escapeXml(title)}</title>${subtitle ? `<desc>${escapeXml(subtitle)}</desc>` : ""}<rect width="100%" height="100%" fill="${palette.background}"/><g font-family="Arial, sans-serif" font-feature-settings="'tnum'"><text x="${compiled.layout.left}" y="25" fill="${palette.text}" font-size="16" font-weight="700">${escapeXml(title)}</text>${subtitle ? `<text x="${compiled.layout.left}" y="42" fill="${palette.muted}" font-size="11">${escapeXml(subtitle)}</text>` : ""}${shapes.map(shapeMarkup).join("")}</g></svg>`;
}
function compileKlicChartBoard(board) {
  const errors = [];
  if (!isRecord(board)) {
    return { valid: false, charts: [], errors: [{ path: "", code: "INVALID_TYPE", message: "Board spec must be an object." }] };
  }
  rejectUnknown(board, ["schemaVersion", "title", "columns", "charts"], "", errors);
  if (board.schemaVersion !== "1.0")
    add(errors, "schemaVersion", "UNSUPPORTED_VERSION", "schemaVersion must be 1.0.");
  if (![1, 2, 3].includes(board.columns))
    add(errors, "columns", "INVALID_LAYOUT", "columns must be 1, 2, or 3.");
  if (board.title !== undefined && (typeof board.title !== "string" || board.title.length > 200))
    add(errors, "title", "INVALID_OPTION", "title must be a string up to 200 characters.");
  if (!Array.isArray(board.charts) || board.charts.length < 1 || board.charts.length > 8)
    add(errors, "charts", "LIMIT_EXCEEDED", "Boards need 1–8 charts.");
  if (errors.length)
    return { valid: false, schemaVersion: "1.0", charts: [], errors };
  const charts = (Array.isArray(board.charts) ? board.charts : []).map((spec, index) => {
    const result = compileKlicChart(spec);
    for (const error of result.errors || [])
      errors.push({ ...error, path: `charts[${index}].${error.path}` });
    return result;
  });
  return { valid: errors.length === 0, schemaVersion: "1.0", title: board.title ?? "", columns: board.columns, charts, errors };
}
function renderKlicChartBoardSvg(board) {
  const compiled = board?.valid ? board : compileKlicChartBoard(board);
  if (!compiled.valid)
    throw new TypeError("renderKlicChartBoardSvg requires a valid board.");
  const columns = compiled.columns, rows = Math.ceil(compiled.charts.length / columns), cellWidth = 800 / columns, cellHeight = 420 / rows, children = compiled.charts.map((chart, index) => {
    const x = index % columns * cellWidth, y = Math.floor(index / columns) * cellHeight;
    return `<g transform="translate(${x} ${y}) scale(${cellWidth / chart.display.width} ${cellHeight / chart.display.height})">${renderKlicChartSvg(chart).replace(/^<svg[^>]*>|<\/svg>$/g, "")}</g>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${Math.max(420, rows * cellHeight)}" viewBox="0 0 800 ${Math.max(420, rows * cellHeight)}" role="img" aria-label="${escapeXml(compiled.title || "KLIC chart board")}"><title>${escapeXml(compiled.title || "KLIC chart board")}</title>${children}</svg>`;
}

// dist/chart-authoring.mjs
var CHART_APP_URI = "ui://klic/chart-view.html";
var CHART_APP_MIME = "text/html;profile=mcp-app";
var CHART_APP_CSP = Object.freeze({ connectDomains: [], resourceDomains: [], frameDomains: [], baseUriDomains: [] });
var KLIC_CHART_SKILLS = Object.freeze({
  chart: [
    "# KLIC chart authoring",
    "",
    "Use the KLIC-owned `KlicChartSpec` schema. Start with `klic_list_chart_types` and select a KLIC type by its accepted channels. Bind each encoding to one field in `data.rows`; declare field kind, display label, and unit when known.",
    "",
    "```json",
    '{"schemaVersion":"1.0","data":{"rows":[{"month":"2026-01","users":120},{"month":"2026-02","users":155}]},"fields":{"month":{"kind":"temporal","label":"Month"},"users":{"kind":"quantitative","label":"Users","unit":"people"}},"chart":{"type":"line","encodings":{"x":"month","y":"users"}},"display":{"title":"Monthly users","profile":"core","mode":"light"}}',
    "```",
    "",
    "Call `klic_validate_chart` before `klic_show_chart`. The spec is limited to 5,000 rows and 1 MiB. Values are scalar JSON values. KLIC renders local SVG only; it does not fetch URLs or read files. Every compiled chart includes an exact table from its plot data. Use KLIC blue and neutral roles, never add green, mint, or teal colors.",
    "",
    "Use `klic_render_chart` for SVG text, `klic_compile_chart` for plot data and diagnostics, and `klic_show_chart` for the chart view. Hosted HTTP and WebMCP expose chart metadata; row-bearing chart tools run on local stdio only."
  ].join(`
`),
  theme: [
    "# KLIC chart themes",
    "",
    "KLIC chart profiles are `core`, `studio`, and `data`; each supports `light` and `dark`. Use `klic_list_chart_themes` to read the current blue/neutral palette. A profile changes palette ordering and presentation context without accepting arbitrary CSS, fonts, external assets, or external renderer backends.",
    "",
    "Use the existing `klic.*` four-layer token paths in application UI. Keep plot series blue or neutral; use amber/red only where data explicitly encodes warning or danger."
  ].join(`
`),
  interaction: [
    "# KLIC chart interactions",
    "",
    "Use `klic_list_chart_interactions` and check the selected chart type’s supported interactions. KLIC exposes exact-value inspection and single-row selection in the React chart view. Escape clears selection. Keyboard instructions come from the KLIC type registry.",
    "",
    "KLIC v1 has no chart-linked cross-filter, arbitrary update language, or persistent board state. Keep exact values available through the compiled data table."
  ].join(`
`),
  board: [
    "# KLIC chart boards",
    "",
    "Use `KlicChartBoardSpec` to validate a static board with 1–8 independent KLIC chart specs and 1–3 columns. Give each chart its own data and encodings; run `klic_validate_chart_board`, then `klic_show_chart` with the board. KLIC v1 does not link filters or share dashboard state between charts."
  ].join(`
`)
});
function getKlicChartSkill({ skill = "chart", section } = {}) {
  const text = KLIC_CHART_SKILLS[skill];
  if (!text)
    return null;
  if (section === undefined)
    return { skill, contents: text };
  const heading = `## ${section}`, start = text.indexOf(heading);
  if (start < 0)
    return null;
  const next = text.indexOf(`
## `, start + heading.length);
  return { skill, section, contents: text.slice(start, next < 0 ? undefined : next).trim() };
}
function chartResourceList({ includeApp = false } = {}) {
  const resources = [
    { uri: "klic://chart-types", name: "klic-chart-types", title: "KLIC chart type catalog", description: "KLIC chart IDs, required channels, options and keyboard contracts.", mimeType: "application/json" },
    { uri: "klic://chart-authoring", name: "klic-chart-authoring", title: "KLIC chart authoring guide", description: "KlicChartSpec authoring, limits, privacy boundary and rendering flow.", mimeType: "text/markdown" },
    { uri: "klic://chart-themes", name: "klic-chart-themes", title: "KLIC chart themes", description: "KLIC profile and mode palettes.", mimeType: "application/json" },
    { uri: "klic://chart-interactions", name: "klic-chart-interactions", title: "KLIC chart interactions", description: "Supported KLIC chart interaction contracts.", mimeType: "application/json" }
  ];
  if (includeApp)
    resources.push({ uri: CHART_APP_URI, name: "klic-chart-view", title: "KLIC chart view", description: "Sandboxed local chart and exact-value table view.", mimeType: CHART_APP_MIME, _meta: { ui: { csp: CHART_APP_CSP, prefersBorder: true } } });
  return resources;
}
function readChartResource(uri) {
  if (uri === "klic://chart-types")
    return { uri, mimeType: "application/json", text: JSON.stringify({ schemaVersion: "1.0", types: KLIC_CHART_TYPES }) };
  if (uri === "klic://chart-authoring")
    return { uri, mimeType: "text/markdown", text: KLIC_CHART_SKILLS.chart };
  if (uri === "klic://chart-themes")
    return { uri, mimeType: "application/json", text: JSON.stringify(KLIC_CHART_THEMES) };
  if (uri === "klic://chart-interactions")
    return { uri, mimeType: "application/json", text: JSON.stringify(KLIC_CHART_INTERACTIONS) };
  if (uri === CHART_APP_URI)
    return { uri, mimeType: CHART_APP_MIME, text: KLIC_CHART_VIEW_HTML, _meta: { ui: { csp: CHART_APP_CSP, prefersBorder: true } } };
  return null;
}
var KLIC_CHART_PROMPTS = Object.freeze([
  { name: "klic_author_chart", title: "Author a KLIC chart", description: "Load KLIC chart-spec rules before creating a chart.", arguments: [{ name: "goal", description: "What the chart should help compare or explain.", required: true }] },
  { name: "klic_author_chart_board", title: "Author a KLIC chart board", description: "Load KLIC chart-board rules before creating a static board.", arguments: [{ name: "goal", description: "What the board should compare.", required: true }] }
]);
function getKlicChartPrompt(name, args = {}) {
  const prompt = KLIC_CHART_PROMPTS.find((item) => item.name === name);
  if (!prompt)
    return null;
  const goal = typeof args.goal === "string" && args.goal.trim() ? args.goal.trim() : "Create a useful chart from the supplied rows.";
  const skill = getKlicChartSkill({ skill: name === "klic_author_chart_board" ? "board" : "chart" }).contents;
  return { description: prompt.description, messages: [{ role: "user", content: { type: "text", text: `${skill}

User goal: ${goal}` } }] };
}
function supportsKlicChartApp(capabilities) {
  return capabilities?.extensions?.["io.modelcontextprotocol/ui"]?.mimeTypes?.includes(CHART_APP_MIME) === true;
}
var KLIC_CHART_VIEW_HTML = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KLIC chart</title>
<style>
:root{color-scheme:light dark;font:14px/1.5 system-ui,sans-serif;color:#132c46;background:#fbfcfe}*{box-sizing:border-box}body{margin:0;padding:16px;background:var(--color-background-primary,#fbfcfe);color:var(--color-text-primary,#132c46)}header{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}h1{font-size:18px;line-height:1.3;margin:0 0 4px}p{margin:0;color:var(--color-text-secondary,#52657b)}img{display:block;max-width:100%;height:auto;margin:14px auto;border:1px solid #dfe5ee;border-radius:8px;background:#fff}details{margin-top:12px}summary{cursor:pointer;padding:8px 0}table{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums}th,td{text-align:left;padding:7px 9px;border-bottom:1px solid #dfe5ee}th{font-weight:600;color:#52657b}#status{min-height:1.5em;color:#52657b}.error{color:#b42318}@media(prefers-color-scheme:dark){:root{color:#e8eef8;background:#101722}img{border-color:#31425c}th,td{border-color:#31425c}th,p,#status{color:#a8b6cc}}</style></head>
<body><header><div><h1 id="title">KLIC chart</h1><p id="summary">Waiting for local chart result…</p></div></header><div id="status" role="status" aria-live="polite"></div><main id="charts"></main><details id="data" hidden><summary>Exact data</summary><div id="tables"></div></details>
<script>
(()=>{'use strict';const title=document.getElementById('title'),summary=document.getElementById('summary'),status=document.getElementById('status'),charts=document.getElementById('charts'),data=document.getElementById('data'),tables=document.getElementById('tables');let ready=false;
const send=(method,params={})=>window.parent.postMessage({jsonrpc:'2.0',method,params},'*');
function addTable(target,table){if(!table||!Array.isArray(table.columns)||!Array.isArray(table.rows))return;const element=document.createElement('table'),head=document.createElement('thead'),headRow=document.createElement('tr');for(const column of table.columns){const cell=document.createElement('th');cell.scope='col';cell.textContent=String(column);headRow.append(cell);}head.append(headRow);const body=document.createElement('tbody');for(const row of table.rows){const tr=document.createElement('tr');for(const value of row){const td=document.createElement('td');td.textContent=value===null?'—':String(value);tr.append(td);}body.append(tr);}element.append(head,body);target.append(element);}
function show(result){const value=result&&result.structuredContent;if(!value||value.valid===false){status.textContent=(result?.content||[]).map(item=>item.text||'').join(' ')||'차트를 만들지 못했습니다.';status.className='error';return;}title.textContent=value.summary?.title||value.title||value.type||'KLIC chart';summary.textContent=value.summary?value.summary.rows+'개 행 · '+value.summary.marks+'개 mark':value.charts?.length+'개 독립 차트';charts.replaceChildren();if(typeof value.svg==='string'){const image=document.createElement('img');image.alt=title.textContent+' 차트';image.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(value.svg);charts.append(image);}tables.replaceChildren();addTable(tables,value.table);for(const chart of value.charts||[])addTable(tables,chart.table);data.hidden=tables.childElementCount===0;status.textContent=(value.diagnostics||[]).join(' ');status.className='';}
window.addEventListener('message',event=>{if(event.source!==window.parent)return;const message=event.data;if(!message||message.jsonrpc!=='2.0')return;if(message.id===1&&message.result&&!ready){ready=true;send('ui/notifications/initialized');return;}if(message.method==='ui/notifications/tool-result')show(message.params);if(message.method==='ui/notifications/tool-cancelled')status.textContent='Chart rendering was cancelled.';if(message.method==='ui/notifications/host-context-changed'&&message.params?.theme)document.documentElement.dataset.theme=message.params.theme;});
window.parent.postMessage({jsonrpc:'2.0',id:1,method:'ui/initialize',params:{protocolVersion:'2026-01-26',appInfo:{name:'klic-chart-view',version:'1.0.0'},appCapabilities:{availableDisplayModes:['inline']}}},'*');})();
</script></body></html>`;

// dist/chart-tools.mjs
var object = (properties, required = []) => ({ type: "object", properties, ...required.length ? { required } : {}, additionalProperties: false });
var readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };
var localTool = (name, title, description, inputSchema) => ({ name, title, description, inputSchema, annotations: readOnly });
var showChartInput = { oneOf: [
  object({ chart: KLIC_CHART_BOARD_SPEC_SCHEMA.properties.charts.items }, ["chart"]),
  object({ board: KLIC_CHART_BOARD_SPEC_SCHEMA }, ["board"])
] };
var KLIC_CHART_METADATA_TOOL_DEFINITIONS = [
  { name: "klic_list_chart_types", title: "List KLIC chart types", description: "List KLIC-owned data-driven chart types, required/optional channels, field kinds, options, interactions and keyboard contracts. Filter by type, family or query.", inputSchema: object({ type: { type: "string", enum: KLIC_CHART_TYPE_IDS }, family: { type: "string" }, query: { type: "string", maxLength: 120 } }), annotations: readOnly },
  { name: "klic_list_chart_themes", title: "List KLIC chart themes", description: "List the KLIC Core, Studio and Data profiles in light/dark modes with their blue and neutral chart palettes. Arbitrary renderer themes are not accepted.", inputSchema: object({ profile: { type: "string", enum: ["core", "studio", "data"] }, mode: { type: "string", enum: ["light", "dark"] } }), annotations: readOnly },
  { name: "klic_list_chart_interactions", title: "List KLIC chart interactions", description: "List supported KLIC inspect and select contracts or filter them for one KLIC chart type.", inputSchema: object({ chartType: { type: "string", enum: KLIC_CHART_TYPE_IDS }, type: { type: "string", enum: KLIC_CHART_INTERACTIONS.map((item) => item.type) } }), annotations: readOnly },
  { name: "klic_get_chart_skill", title: "Get KLIC chart authoring skill", description: "Return KLIC chart, theme, interaction or board authoring instructions, optionally narrowed to a heading.", inputSchema: object({ skill: { type: "string", enum: Object.keys(KLIC_CHART_SKILLS) }, section: { type: "string", maxLength: 120 } }), annotations: readOnly }
];
var KLIC_CHART_LOCAL_TOOL_DEFINITIONS = [
  localTool("klic_validate_chart", "Validate KLIC chart", "Validate a KLIC chart spec on local stdio and return path-specific schema, field, option, interaction and limit diagnostics.", object({ spec: KLIC_CHART_BOARD_SPEC_SCHEMA.properties.charts.items }, ["spec"])),
  localTool("klic_compile_chart", "Compile KLIC chart", "Compile one KLIC chart locally to SVG geometry, plot rows, an exact table and omission diagnostics.", object({ spec: KLIC_CHART_BOARD_SPEC_SCHEMA.properties.charts.items }, ["spec"])),
  localTool("klic_render_chart", "Render KLIC chart", "Render one validated KLIC chart as deterministic KLIC SVG and an exact-value table. Data stays in the local stdio process.", object({ spec: KLIC_CHART_BOARD_SPEC_SCHEMA.properties.charts.items }, ["spec"])),
  localTool("klic_show_chart", "Show KLIC chart or board", "Show one KLIC chart or a static board. On MCP Apps hosts the tool opens the bundled chart view; other hosts receive SVG text and exact tables.", showChartInput),
  localTool("klic_validate_chart_board", "Validate KLIC chart board", "Validate a static board of 1–8 independent KLIC chart specs. Linked filtering and shared dashboard state are not supported.", object({ board: KLIC_CHART_BOARD_SPEC_SCHEMA }, ["board"]))
];
var KLIC_CHART_LOCAL_TOOL_NAMES = Object.freeze(KLIC_CHART_LOCAL_TOOL_DEFINITIONS.map((tool) => tool.name));
function getKlicChartMcpTools({ transport = "mcp", clientCapabilities } = {}) {
  if (transport !== "stdio-mcp")
    return [];
  return KLIC_CHART_LOCAL_TOOL_DEFINITIONS.map((tool) => tool.name === "klic_show_chart" && supportsKlicChartApp(clientCapabilities) ? { ...tool, _meta: { ui: { resourceUri: CHART_APP_URI, visibility: ["model"] } } } : { ...tool });
}
function getKlicChartResources({ transport = "mcp", clientCapabilities } = {}) {
  return chartResourceList({ includeApp: transport === "stdio-mcp" && supportsKlicChartApp(clientCapabilities) });
}
function readKlicChartResource(uri) {
  return readChartResource(uri);
}
function getKlicChartPromptList() {
  return KLIC_CHART_PROMPTS;
}
var filters = (input, allowed) => {
  if (!input || typeof input !== "object" || Array.isArray(input))
    throw new Error("Arguments must be an object.");
  for (const key of Object.keys(input))
    if (!allowed.includes(key))
      throw new Error(`Unknown argument: ${key}`);
};
function chartTypes(input, invalid) {
  filters(input, ["type", "family", "query"]);
  const query = input.query?.trim().toLocaleLowerCase() || "";
  if (input.type && !KLIC_CHART_TYPES[input.type])
    invalid(`Unknown KLIC chart type: ${input.type}.`);
  const types = Object.values(KLIC_CHART_TYPES).filter((type) => (!input.type || type.id === input.type) && (!input.family || type.family === input.family) && (!query || `${type.id} ${type.family} ${type.channels.map((channel) => channel.name).join(" ")}`.toLocaleLowerCase().includes(query)));
  return { schemaVersion: "1.0", total: types.length, types };
}
function chartThemes(input, invalid) {
  filters(input, ["profile", "mode"]);
  if (input.profile && !KLIC_CHART_THEMES.profiles.includes(input.profile))
    invalid("profile must be core, studio, or data.");
  if (input.mode && !KLIC_CHART_THEMES.modes.includes(input.mode))
    invalid("mode must be light or dark.");
  const profiles = input.profile ? [input.profile] : KLIC_CHART_THEMES.profiles, modes = input.mode ? [input.mode] : KLIC_CHART_THEMES.modes;
  return { schemaVersion: "1.0", profiles, modes, themes: profiles.flatMap((profile) => modes.map((mode) => ({ profile, mode, ...KLIC_CHART_THEMES[mode] }))) };
}
function chartInteractions(input, invalid) {
  filters(input, ["chartType", "type"]);
  if (input.chartType && !KLIC_CHART_TYPES[input.chartType])
    invalid(`Unknown KLIC chart type: ${input.chartType}.`);
  const supported = input.chartType ? new Set(KLIC_CHART_TYPES[input.chartType].interactions) : null;
  const presets = KLIC_CHART_INTERACTIONS.filter((item) => (!supported || supported.has(item.type)) && (!input.type || input.type === item.type));
  return { schemaVersion: "1.0", presets };
}
function chartSkill(input, invalid) {
  filters(input, ["skill", "section"]);
  if (!Object.hasOwn(KLIC_CHART_SKILLS, input.skill))
    invalid("skill must be chart, theme, interaction, or board.");
  const skill = getKlicChartSkill(input);
  if (!skill)
    invalid(`No section named ${input.section} exists in the ${input.skill} skill.`);
  return { schemaVersion: "1.0", ...skill };
}
function visibleResult(compiled, withPlotData = false) {
  if (!compiled.valid)
    return { schemaVersion: "1.0", valid: false, errors: compiled.errors };
  return { schemaVersion: "1.0", valid: true, type: compiled.type, family: compiled.family, display: compiled.display, ...withPlotData ? { plotData: compiled.plotData } : {}, table: compiled.table, diagnostics: compiled.diagnostics, summary: compiled.summary };
}
function executeKlicChartTool(name, input, invalid) {
  if (name === "klic_list_chart_types")
    return chartTypes(input, invalid);
  if (name === "klic_list_chart_themes")
    return chartThemes(input, invalid);
  if (name === "klic_list_chart_interactions")
    return chartInteractions(input, invalid);
  if (name === "klic_get_chart_skill")
    return chartSkill(input, invalid);
  if (name === "klic_validate_chart") {
    filters(input, ["spec"]);
    const result = validateKlicChart(input.spec);
    return { schemaVersion: "1.0", valid: result.valid, errors: result.errors };
  }
  if (name === "klic_compile_chart") {
    filters(input, ["spec"]);
    return visibleResult(compileKlicChart(input.spec), true);
  }
  if (name === "klic_render_chart") {
    filters(input, ["spec"]);
    const compiled = compileKlicChart(input.spec);
    if (!compiled.valid)
      return { schemaVersion: "1.0", valid: false, errors: compiled.errors };
    const svg = renderKlicChartSvg(compiled);
    if (new TextEncoder().encode(svg).byteLength > 1048576)
      return { schemaVersion: "1.0", valid: false, errors: [{ path: "output.svg", code: "LIMIT_EXCEEDED", message: "Rendered SVG is limited to 1 MiB." }] };
    return { ...visibleResult(compiled), svg };
  }
  if (name === "klic_validate_chart_board") {
    filters(input, ["board"]);
    const board = compileKlicChartBoard(input.board);
    return { schemaVersion: "1.0", valid: board.valid, title: board.title ?? "", columns: board.columns ?? input.board?.columns, charts: board.charts.map((chart) => chart.valid ? { valid: true, type: chart.type, summary: chart.summary, errors: [] } : { valid: false, errors: chart.errors }), errors: board.errors };
  }
  if (name === "klic_show_chart") {
    filters(input, ["chart", "board"]);
    if (!!input.chart === !!input.board)
      invalid("Provide exactly one of chart or board.");
    if (input.chart) {
      const compiled = compileKlicChart(input.chart);
      if (!compiled.valid)
        return { schemaVersion: "1.0", valid: false, view: "chart", errors: compiled.errors };
      const svg = renderKlicChartSvg(compiled);
      if (new TextEncoder().encode(svg).byteLength > 1048576)
        return { schemaVersion: "1.0", valid: false, view: "chart", errors: [{ path: "output.svg", code: "LIMIT_EXCEEDED", message: "Rendered SVG is limited to 1 MiB." }] };
      return { schemaVersion: "1.0", valid: true, view: "chart", type: compiled.type, svg, table: compiled.table, diagnostics: compiled.diagnostics, summary: compiled.summary };
    }
    const board = compileKlicChartBoard(input.board);
    if (!board.valid)
      return { schemaVersion: "1.0", valid: false, view: "board", errors: board.errors, charts: board.charts.map((chart) => chart.valid ? { valid: true, type: chart.type, summary: chart.summary } : { valid: false, errors: chart.errors }) };
    const svg = renderKlicChartBoardSvg(board);
    if (new TextEncoder().encode(svg).byteLength > 1048576)
      return { schemaVersion: "1.0", valid: false, view: "board", errors: [{ path: "output.svg", code: "LIMIT_EXCEEDED", message: "Rendered SVG board is limited to 1 MiB." }] };
    return { schemaVersion: "1.0", valid: true, view: "board", title: board.title, columns: board.columns, svg, charts: board.charts.map((chart) => ({ valid: true, type: chart.type, table: chart.table, summary: chart.summary })) };
  }
  return null;
}

// dist/integrations/klic.mjs
var MOTION_CATEGORY_IDS = Object.freeze(["principles", "easing", "spring", "timing", "backdrop", "entrance", "move", "scale", "rotate", "reaction", "collection", "attention", "light", "effect", "transitions", "camera", "web-scroll", "web-interaction", "web-layout", "web-feedback", "form-state", "gesture", "svg-path", "svg-diagram", "3d-depth", "ui-button", "ui-control", "ui-navigation", "ui-loading", "ui-feedback", "game-hud", "game-combat", "game-reward", "game-progress", "game-cinematic", "ui-spatial", "ui-material", "game-impact-fx", "data-story", "particles", "loops", "character", "look", "depth3d", "sound", "tx-reveal", "tx-exit", "tx-emphasis", "tx-swap", "tx-typing", "tx-physics", "tx-path", "tx-mask", "tx-color-light", "tx-blur", "tx-glitch", "tx-depth", "tx-variable", "tx-scroll", "tx-pointer", "tx-counter", "tx-caption", "tx-layout", "tx-loop", "tx-japanese", "tx-title", "tx-broadcast"]);
var MOTION_CATALOG_INVENTORY = Object.freeze({ source: "klic-motion-library", total: 927, categories: 67, referenceItems: 884, klicItems: 43, flowmotionItems: 41, motionRecipeItems: 2 });
var SITE_METADATA = {
  schemaVersion: 1,
  site: {
    name: "KLIC Interface Library",
    title: "KLIC — Interface Library",
    origin: "https://design.klic.co.kr",
    locales: [
      "ko",
      "en"
    ],
    defaultLocale: "ko",
    localeNames: {
      ko: "한국어",
      en: "English"
    }
  },
  toolchain: {
    bun: "1.4.4",
    nodeMinimum: "22"
  },
  package: {
    name: "klic-design",
    version: "0.0.7",
    registry: "https://registry.npmjs.org/"
  },
  versions: {
    toolkit: "0.0.1",
    api: "1.0.0",
    registrySchema: "1.0",
    designSystemSchema: "1.0",
    designContractSchema: "1.0",
    themeSchema: "1.0",
    bundleSchema: "1.0",
    previewDependencySchema: "1.0",
    compositionExportSchema: "1.0",
    openapi: "3.1.0",
    mcpProtocols: [
      "2026-07-28",
      "2025-11-25"
    ]
  },
  routes: {
    mcp: "/api/v1/mcp",
    cli: "/integrations/klic-standalone.mjs"
  },
  integrations: {
    api: {
      status: "available",
      transport: "http-json",
      methods: [
        "GET"
      ],
      serverFiltering: true,
      authentication: "public",
      writes: false
    },
    cli: {
      status: "available",
      runtime: {
        preferred: "bun",
        compatible: [
          "node"
        ]
      }
    },
    mcp: {
      status: "remote-and-stdio",
      authentication: "public-design-read-only",
      managedAuthentication: "Sites personal plugin",
      chartAuthoring: {
        status: "available",
        schemaVersion: "1.0",
        renderer: "KLIC SVG",
        localDataTransport: "stdio",
        hostedDataTools: false,
        webmcpDataTools: false,
        mcpAppMimeType: "text/html;profile=mcp-app"
      }
    },
    webmcp: {
      status: "feature-detected",
      interface: "document.modelContext",
      scope: "current browser tab"
    },
    skill: {
      status: "available",
      name: "klic-design",
      format: "agentskills",
      path: "/skills/klic-design/SKILL.md",
      packagePath: "skills/klic-design/SKILL.md",
      npmPackage: {
        name: "klic-design",
        version: "0.0.7",
        registry: "https://registry.npmjs.org/",
        skillPath: "SKILL.md"
      }
    },
    themes: {
      status: "available",
      packageMode: "standalone-theme-kit"
    }
  },
  rateLimit: {
    windowSeconds: 60,
    by: "IP",
    limits: {
      api: 120,
      mcp: 60,
      download: 2000
    },
    unlimited: "Server-allowlisted secret key via X-KLIC-API-Key; CLI uses KLIC_API_KEY.",
    response: 429,
    retryHeader: "Retry-After",
    offline: "Local copies and already-loaded stdio/WebMCP operations are not server-rate-limited."
  },
  delivery: {
    type: "reference-library",
    summary: "klic-design 통합 패키지: AI 설계 지침·토큰·테마·폰트·재사용 차트 엔진·CLI·사용자 제공 모션 소스의 KLIC 각색·공유 런타임 예제",
    enSummary: "Unified klic-design package: Agent Skill, tokens, themes, fonts, reusable KLIC chart engine, CLI and KLIC-adapted motion source with shared runtime examples",
    sourceDelivery: "Components: Native HTML and Vue SFCs for 109 IDs / 525 forms. Ready blocks: React and Vue workspaces for all 357 IDs, delivered by the current standalone Site CLI. Vue SFC motion examples cover all 925 records. Public klic-design@latest does not yet include Vue exports; use the current Site source workspaces until a separate npm release. Motion: preserve the 884 adopted source patterns and add individual KLIC-authored FlowMotion effects in the same 67 categories, grouped in the existing KLIC navigation. Preserve source id + pattern + engine, choreography, timing, paths, layers, SVG/inline/WAAPI alpha, per-source authorship, copyright and license notices; do not carry old recipes or routes forward as compatibility entries. Adapt color, fonts, surfaces, borders, radius and spacing through existing four-layer KLIC token paths, and scope demo CSS per item. Previews and JavaScript/React delivery use the shared klic-design/motions/runtime and klic-design/motions/runtime.css exports; Canvas playback requires JavaScript and is not reproduced by CSS alone. Motion counts remain separate from component, block and CLI workspace counts. Charts: use KLIC-owned KlicChartSpec and the local npm candidate exports klic-design/charts and klic-design/charts/react; a separate npm release is required before public latest includes them. send chart rows only to local stdio MCP. Hosted HTTP and WebMCP expose metadata only; a guessed HTTP request is rejected with LOCAL_ONLY before chart validation or rendering after the caller's payload reaches the endpoint.",
    licensing: {
      mode: "per-file",
      guide: "/licenses/README.md"
    },
    figma: {
      delivery: "manifest-and-migration-guide",
      manifest: "/design-contract/materials/figma-manifest.json",
      guide: "/design-contract/materials/figma-migration.md",
      liveSync: false
    },
    sourceRepository: {
      status: "not-declared",
      delivery: "Use the published source exports and verified CLI bundles."
    },
    versioning: {
      toolkit: "CLI and shared integration runtime version; independent of the npm package version",
      schema: "Response format version",
      release: "Registry publication hash",
      revision: "Design criteria hash"
    }
  },
  links: {
    deliveryScope: "/about",
    licenses: "/licenses/README.md",
    figma: "/design-contract/materials/figma-migration.md",
    designSystem: "/api/v1/design-system.json",
    designDocs: "/#docs/architecture",
    themes: "/api/v1/themes.json",
    themeGuide: "/resources/cli#themes",
    docs: "/resources",
    api: "/resources/api",
    cli: "/resources/cli",
    mcp: "/resources/mcp",
    webmcp: "/resources/webmcp",
    skill: "/resources/cli#klic-design-skill",
    schema: "/api/v1/registry.schema.json",
    openapi: "/api/v1/openapi.json",
    capabilities: "/api/v1/capabilities.json",
    tools: "/api/v1/tools.json"
  }
};
var SITE_ORIGIN = SITE_METADATA.site.origin;
var MCP_URL = new URL(SITE_METADATA.routes.mcp, SITE_ORIGIN + "/").href;
var INTEGRATION_VERSION = SITE_METADATA.versions.toolkit;
var PROTOCOL_VERSIONS = SITE_METADATA.versions.mcpProtocols;
var API_BASE_PATH = "/api/v1";
var SITE_CLI_FILENAME = SITE_METADATA.routes.cli.split("/").filter(Boolean).at(-1);
var BUN_CLI_COMMAND = `bun ./${SITE_CLI_FILENAME}`;
var NODE_CLI_COMMAND = `node ./${SITE_CLI_FILENAME}`;
var [MCP_MODERN_PROTOCOL, MCP_LEGACY_PROTOCOL] = PROTOCOL_VERSIONS;

class RegistryError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "RegistryError";
    this.code = code;
  }
}
var invalid = (message) => {
  throw new RegistryError("INVALID_ARGUMENT", message);
};
var record = (value) => !!value && typeof value === "object" && !Array.isArray(value);
var validLocalePair = (value) => record(value) && typeof value.ko === "string" && value.ko.length > 0 && typeof value.en === "string" && value.en.length > 0 && Object.keys(value).length === 2;
function fields(input, allowed) {
  if (!record(input))
    invalid("Arguments must be an object.");
  for (const key of Object.keys(input))
    if (!allowed.includes(key))
      invalid(`Unknown argument: ${key}`);
}
function systemFields(registry) {
  return registry.designSystem ? { designSystem: registry.designSystem } : {};
}
function cliPackageAvailability() {
  return `Use ${BUN_CLI_COMMAND} for Bun or ${NODE_CLI_COMMAND} for Node.js. The CLI reads the current KLIC catalog contract and creates verified standalone source workspaces.`;
}
var DETAIL_LEVELS = ["brief", "compact", "full"];
function detailLevel(input) {
  const detail = input.detail === undefined ? "full" : input.detail;
  if (!DETAIL_LEVELS.includes(detail))
    invalid("detail must be brief, compact or full.");
  return detail;
}
function registryProvenance(registry, schemaVersion = SITE_METADATA.versions.registrySchema) {
  const designRevision = registry.designSystem?.revision || registry.policy?.designSystem?.revision || null;
  const designLinks = registry.designSystem?.links || registry.policy?.designSystem || {};
  return {
    schemaVersion,
    catalogRelease: registry.release ?? null,
    designRevision,
    toolkitVersion: INTEGRATION_VERSION,
    ...designRevision ? { links: { designSystem: { revision: designRevision, api: `${API_BASE_PATH}/design-system.json`, ...designLinks.definition ? { source: designLinks.definition } : {}, ...designLinks.docs ? { docs: designLinks.docs } : {} } } } : {}
  };
}
function withResponder(value, responder) {
  if (!record(value) || !record(value.provenance) || !record(responder))
    return value;
  return { ...value, provenance: { ...value.provenance, responder: { ...responder } } };
}
function itemNext(kind, id, detail) {
  const nextDetail = detail === "brief" ? "compact" : "full";
  return { api: `${API_BASE_PATH}/items/${kind}/${id}.json?detail=${nextDetail}`, cli: `${BUN_CLI_COMMAND} get ${kind} ${id} --detail ${nextDetail}`, tool: { name: "klic_get_item", arguments: { kind, id, detail: nextDetail } } };
}
function projectItem(item, detail) {
  if (detail === "full")
    return item;
  if (detail === "brief")
    return { id: item.id, kind: item.kind, name: item.name, ...item.labels ? { labels: item.labels } : {}, ...item.categoryLabels ? { categoryLabels: item.categoryLabels } : {}, ...item.frameworks ? { frameworks: item.frameworks } : {}, description: item.description, status: item.status, route: item.route, next: itemNext(item.kind, item.id, detail) };
  const { source, install, variants, design, ...base } = item;
  const compact = { ...base };
  if (source)
    compact.source = { ...source };
  if (install)
    compact.install = { manifest: install.manifest, ...Array.isArray(install.dependencies) ? { dependencies: install.dependencies } : {}, ...install.frameworks ? { frameworks: install.frameworks } : {} };
  if (Array.isArray(variants))
    compact.variants = variants.map(({ source: _source, ...variant }) => variant);
  if (design) {
    const { prompt, source: _source, code, examples, ...contract } = design;
    compact.design = contract;
  }
  compact.next = itemNext(item.kind, item.id, detail);
  return compact;
}
function withRegistryProvenance(value, registry, schemaVersion = value.schemaVersion) {
  return { ...value, provenance: { ...value.provenance || {}, ...registryProvenance(registry, schemaVersion) } };
}
function validateDesignSystem(value) {
  if (value === undefined)
    return;
  if (!record(value) || value.schemaVersion !== SITE_METADATA.versions.designSystemSchema || !/^[a-f0-9]{64}$/.test(value.revision) || value.namespace !== "klic." || JSON.stringify(value.tokenLayers) !== JSON.stringify(["Primitive", "Brand", "Semantic", "Component"]) || !Array.isArray(value.dimensions) || value.dimensions.length !== 7 || !record(value.presetPolicy) || !Array.isArray(value.conflictResolution))
    throw new RegistryError("INVALID_REGISTRY", "Invalid design system snapshot.");
  const strings = (v) => Array.isArray(v) && v.every((item) => typeof item === "string");
  const invalid = () => {
    throw new RegistryError("INVALID_REGISTRY", "Invalid design system snapshot.");
  };
  const classPolicy = value.classNamingPolicy;
  if (classPolicy !== undefined && (!record(classPolicy) || typeof classPolicy.title !== "string" || !Array.isArray(classPolicy.namespaces) || classPolicy.namespaces.length !== 5 || classPolicy.namespaces.some((item) => !record(item) || ["prefix", "role", "usage", "example"].some((key) => typeof item[key] !== "string")) || !Array.isArray(classPolicy.variantAxes) || classPolicy.variantAxes.length !== 4 || classPolicy.variantAxes.some((item) => !record(item) || typeof item.axis !== "string" || typeof item.label !== "string" || !strings(item.values) || typeof item.rule !== "string") || typeof classPolicy.tokenPrecedence !== "string" || typeof classPolicy.compatibility !== "string" || !strings(classPolicy.rules)))
    invalid();
  const dataPolicy = value.dataAttributePolicy;
  if (dataPolicy !== undefined && (!record(dataPolicy) || typeof dataPolicy.title !== "string" || !Array.isArray(dataPolicy.attributes) || dataPolicy.attributes.length !== 3 || dataPolicy.attributes.some((item) => !record(item) || ["name", "role", "values"].some((key) => typeof item[key] !== "string")) || !strings(dataPolicy.extensions) || !strings(dataPolicy.rules)))
    invalid();
  const motionPolicy = value.motionResponsibilityPolicy;
  if (motionPolicy !== undefined && (!record(motionPolicy) || typeof motionPolicy.title !== "string" || !Array.isArray(motionPolicy.transitions) || motionPolicy.transitions.length < 2 || motionPolicy.transitions.some((item) => !record(item) || ["component", "from", "to", "effect"].some((key) => typeof item[key] !== "string")) || !record(motionPolicy.ownership) || Object.values(motionPolicy.ownership).some((item) => typeof item !== "string") || !strings(motionPolicy.rules)))
    invalid();
}
function validateRegistry(value) {
  if (!record(value) || value.schemaVersion !== SITE_METADATA.versions.registrySchema || !Array.isArray(value.items) || value.items.length > 1e4 || !record(value.capabilities))
    throw new RegistryError("INVALID_REGISTRY", `Expected a KLIC registry with schemaVersion ${SITE_METADATA.versions.registrySchema}.`);
  validateDesignSystem(value.designSystem);
  if (value.motions !== undefined)
    validateMotionCatalog(value.motions);
  const keys = new Set;
  for (const item of value.items) {
    if (!record(item) || !["component", "block"].includes(item.kind) || !/^[a-z0-9-]{1,90}$/.test(item.id) || typeof item.name !== "string" || typeof item.description !== "string" || typeof item.category !== "string" || !Array.isArray(item.tags) || item.tags.some((tag) => typeof tag !== "string") || item.labels !== undefined && !validLocalePair(item.labels) || item.categoryLabels !== undefined && !validLocalePair(item.categoryLabels) || item.route !== `#${item.kind === "component" ? "component" : "blocks"}/${item.id}/preview` || !["ready", "planned"].includes(item.status) || item.status === "planned" && item.source !== null)
      throw new RegistryError("INVALID_REGISTRY", "Invalid item in registry.");
    const key = `${item.kind}:${item.id}`;
    if (keys.has(key))
      throw new RegistryError("INVALID_REGISTRY", `Duplicate item: ${key}`);
    keys.add(key);
  }
  return value;
}
function validMotionReference(motion) {
  const reference = motion?.reference;
  if (!record(reference))
    return false;
  if (motion.source === "motion-catalog-adapted")
    return reference.sourceLicense === "motion-catalog-acc0mplish" && reference.licensePath === "motion-source/reference/LICENSE.md";
  if (motion.source !== "klic-authored" || reference.sourceLicense !== "klic-authored")
    return false;
  if (reference.collection === "klic-flowmotion")
    return reference.licensePath === "motion-source/klic/flowmotion/NOTICE.md" && record(reference.origin) && reference.definitionPath?.startsWith("motion-source/klic/flowmotion/recipes/") === true && reference.sourceRecord === "motion-source/klic/flowmotion/origin.json";
  if (reference.collection === "klic-motion-recipes")
    return reference.licensePath === "motion-source/klic/motion-recipes/NOTICE.md" && reference.definitionPath === `motion-source/klic/motion-recipes/recipes/${motion.id}.json` && reference.sourceRecord === "motion-source/klic/motion-recipes/progress.mjs" && !("origin" in reference);
  return false;
}
function validateMotionCatalog(value) {
  const fail = () => {
    throw new RegistryError("INVALID_REGISTRY", "Invalid motion catalog.");
  };
  if (!record(value) || value.schemaVersion !== "2.0" || value.source !== MOTION_CATALOG_INVENTORY.source || !Array.isArray(value.categories) || value.categories.length !== MOTION_CATALOG_INVENTORY.categories || !Array.isArray(value.items) || value.items.length !== MOTION_CATALOG_INVENTORY.total || value.total !== MOTION_CATALOG_INVENTORY.total || "routeAliases" in value || "crosswalk" in value)
    fail();
  const categories = new Map;
  for (const category of value.categories) {
    if (!record(category) || !/^[a-z0-9-]{1,90}$/.test(category.id) || categories.has(category.id) || !record(category.label) || typeof category.label.ko !== "string" || typeof category.label.en !== "string" || typeof category.icon !== "string" || !record(category.description) || typeof category.description.ko !== "string" || typeof category.description.en !== "string" || !Number.isInteger(category.count) || category.count < 0)
      fail();
    categories.set(category.id, category.count);
  }
  if ([...categories.values()].reduce((total, count) => total + count, 0) !== value.total)
    fail();
  const ids = new Set, identities = new Set;
  for (const motion of value.items) {
    const reference = motion?.reference, implementation = motion?.implementation;
    if (!record(motion) || !/^[a-z0-9-]{1,90}$/.test(motion.id) || ids.has(motion.id) || !categories.has(motion.category) || !["motion-catalog-adapted", "klic-authored"].includes(motion.source) || typeof motion.title?.ko !== "string" || typeof motion.title?.en !== "string" || typeof motion.summary?.ko !== "string" || typeof motion.summary?.en !== "string" || typeof motion.trigger?.ko !== "string" || typeof motion.trigger?.en !== "string" || !Number.isInteger(motion.durationMs) || motion.durationMs < 1 || motion.durationMs > 60000 || !Number.isInteger(motion.staggerMs) || motion.staggerMs < 0 || motion.staggerMs > 5000 || typeof motion.easing !== "string" || !Array.isArray(motion.useCases) || !Array.isArray(motion.cautions) || typeof motion.reducedMotion?.ko !== "string" || typeof motion.reducedMotion?.en !== "string" || !record(motion.preview) || !validMotionReference(motion) || typeof reference.id !== "string" || typeof reference.pattern !== "string" || reference.route !== motion.id || reference.sourceCategory !== motion.category || !["atlas", "semantic", "text"].includes(reference.engine) || typeof reference.demoId !== "string" || typeof reference.sourceLabel?.ko !== "string" || typeof reference.sourceLabel?.en !== "string" || !record(implementation) || typeof implementation.css !== "string" || typeof implementation.js !== "string" || typeof implementation.react !== "string" || typeof implementation.vue !== "string" || !implementation.vue.includes("useKlicMotion") || implementation.format !== "shared-motion-runtime" || implementation.requiresRuntime !== true || !implementation.js.includes("klic-design/motions/runtime") || !implementation.react.includes("return ()=>motion.destroy()") || motion.route !== `#motion/${motion.id}`)
      fail();
    const identity = `${reference.id}:${reference.pattern}`;
    if (identities.has(identity))
      fail();
    identities.add(identity);
    ids.add(motion.id);
  }
  const flowmotionItems = value.items.filter((item) => item.reference.collection === "klic-flowmotion").length;
  const motionRecipeItems = value.items.filter((item) => item.reference.collection === "klic-motion-recipes").length;
  if (ids.size !== value.total || identities.size !== value.total || value.items.filter((item) => item.source === "motion-catalog-adapted").length !== MOTION_CATALOG_INVENTORY.referenceItems || value.items.filter((item) => item.source === "klic-authored").length !== MOTION_CATALOG_INVENTORY.klicItems || flowmotionItems !== MOTION_CATALOG_INVENTORY.flowmotionItems || motionRecipeItems !== MOTION_CATALOG_INVENTORY.motionRecipeItems)
    fail();
  return value;
}
function requireMotionCatalog(value) {
  if (!value)
    throw new RegistryError("SOURCE_UNAVAILABLE", "This registry does not provide motion recipes.");
  return validateMotionCatalog(value);
}
function motionNext(id, detail) {
  const nextDetail = detail === "brief" ? "compact" : "full";
  return { api: `${API_BASE_PATH}/motions/${id}.json?detail=${nextDetail}`, cli: `${BUN_CLI_COMMAND} motion get ${id} --detail ${nextDetail}`, tool: { name: "klic_get_motion", arguments: { id, detail: nextDetail } } };
}
function projectMotion(motion, detail) {
  if (detail === "full")
    return motion;
  if (detail === "brief")
    return { id: motion.id, category: motion.category, title: motion.title, summary: motion.summary, route: motion.route, reference: motion.reference, next: motionNext(motion.id, detail) };
  const { css, js, react, vue, ...implementation } = motion.implementation;
  return { ...motion, preview: { ...motion.preview }, implementation: { ...implementation }, next: motionNext(motion.id, detail) };
}
function searchMotions(catalog, input = {}) {
  fields(input, ["query", "category", "limit", "cursor", "detail"]);
  const source = requireMotionCatalog(catalog), detail = detailLevel(input), query = input.query ?? "", category = input.category ?? "", limit = input.limit ?? 20, cursor = input.cursor ?? "0";
  if (typeof query !== "string" || query.length > 200)
    invalid("query must be a string of at most 200 characters.");
  if (category && (!/^[a-z0-9-]{1,90}$/.test(category) || !source.categories.some((item) => item.id === category)))
    invalid("category must match a motion category id.");
  if (!Number.isInteger(limit) || limit < 1 || limit > 100)
    invalid("limit must be an integer from 1 to 100.");
  if (typeof cursor !== "string" || !/^\d{1,7}$/.test(cursor))
    invalid("cursor must be the numeric string returned by the previous page.");
  const offset = Number(cursor), needle = query.trim().toLocaleLowerCase(), matches = source.items.filter((item) => (!category || item.category === category) && (!needle || [item.id, item.category, item.title.ko, item.title.en, item.summary.ko, item.summary.en, ...item.useCases.flatMap((entry) => [entry.ko, entry.en])].join(" ").toLocaleLowerCase().includes(needle)));
  if (offset > matches.length)
    invalid("cursor is beyond the result set. Restart with cursor 0 after changing a filter.");
  return { schemaVersion: source.schemaVersion, ...source.release ? { release: source.release } : {}, detail, provenance: { schemaVersion: source.schemaVersion, catalogRelease: source.release ?? null, designRevision: null, toolkitVersion: INTEGRATION_VERSION }, total: matches.length, items: matches.slice(offset, offset + limit).map((motion) => projectMotion(motion, detail)), nextCursor: offset + limit < matches.length ? String(offset + limit) : null };
}
function getMotionRecord(catalog, input = {}) {
  fields(input, ["id", "detail"]);
  const detail = detailLevel(input);
  if (typeof input.id !== "string" || !/^[a-z0-9-]{1,90}$/.test(input.id))
    invalid("Provide a valid motion id.");
  const source = requireMotionCatalog(catalog), motion = source.items.find((item) => item.id === input.id);
  if (!motion)
    throw new RegistryError("NOT_FOUND", `No canonical motion named ${input.id}.`);
  return { schemaVersion: source.schemaVersion, ...source.release ? { release: source.release } : {}, detail, provenance: { schemaVersion: source.schemaVersion, catalogRelease: source.release ?? null, designRevision: null, toolkitVersion: INTEGRATION_VERSION }, motion: projectMotion(motion, detail) };
}
function searchRegistry(registry, input = {}) {
  fields(input, ["query", "kind", "status", "limit", "cursor", "token", "group", "detail"]);
  const detail = detailLevel(input);
  const query = input.query ?? "", kind = input.kind ?? "all", status = input.status ?? "ready", limit = input.limit ?? 20, cursor = input.cursor ?? "0";
  if (typeof query !== "string" || query.length > 200)
    invalid("query must be a string of at most 200 characters.");
  if (!["all", "component", "block"].includes(kind))
    invalid("kind must be all, component or block.");
  if (!["ready", "planned", "all"].includes(status))
    invalid("status must be ready, planned or all.");
  if (!Number.isInteger(limit) || limit < 1 || limit > 100)
    invalid("limit must be an integer from 1 to 100.");
  if (typeof cursor !== "string" || !/^\d{1,7}$/.test(cursor))
    invalid("cursor must be the numeric string returned by the previous page.");
  for (const key of ["token", "group"]) {
    const maximum = key === "group" ? 100 : 200;
    if (input[key] !== undefined && (typeof input[key] !== "string" || input[key].length > maximum))
      invalid(key + " must be a string up to " + maximum + " characters.");
  }
  const offset = Number(cursor), q = query.trim().toLocaleLowerCase();
  const matches = registry.items.map((item, index) => ({ item, index, score: !q ? 0 : (() => {
    const id = String(item.id || "").toLocaleLowerCase(), names = [item.name, ...Object.values(item.labels || {})].filter(Boolean).map((value) => String(value).toLocaleLowerCase());
    if (id === q || names.includes(q))
      return 0;
    if (id.startsWith(q) || names.some((name) => name.startsWith(q)))
      return 1;
    if (id.includes(q) || names.some((name) => name.includes(q)))
      return 2;
    return 3;
  })() })).filter(({ item }) => (kind === "all" || item.kind === kind) && (status === "all" || item.status === status) && (!input.group || (item.structure?.group?.id || item.category) === input.group) && (!input.token || item.design?.tokenMapping.some((t) => t.path.includes(input.token))) && (!q || [item.id, item.name, ...Object.values(item.labels || {}), ...Object.values(item.categoryLabels || {}), item.description, item.category, item.structure?.group?.label, ...item.design?.tokenMapping.map((t) => t.path) || [], ...item.tags || []].join(" ").toLocaleLowerCase().includes(q))).sort((a, b) => a.score - b.score || a.index - b.index);
  if (offset > matches.length)
    invalid("cursor is beyond the result set. Restart with cursor 0 after changing a filter.");
  return { schemaVersion: SITE_METADATA.versions.registrySchema, ...detail === "full" ? systemFields(registry) : {}, release: registry.release, detail, provenance: registryProvenance(registry), total: matches.length, items: matches.slice(offset, offset + limit).map(({ item }) => projectItem(item, detail)), nextCursor: offset + limit < matches.length ? String(offset + limit) : null };
}
function getRegistryItem(registry, input = {}) {
  fields(input, ["kind", "id", "detail"]);
  const detail = detailLevel(input);
  if (!["component", "block"].includes(input.kind) || typeof input.id !== "string" || !/^[a-z0-9-]{1,90}$/.test(input.id))
    invalid("Provide kind (component or block) and a valid catalog id.");
  const item = registry.items.find((item) => item.kind === input.kind && item.id === input.id);
  if (!item)
    throw new RegistryError("NOT_FOUND", `No ${input.kind} named ${input.id}.`);
  return { schemaVersion: SITE_METADATA.versions.registrySchema, ...detail === "full" ? systemFields(registry) : {}, release: registry.release, detail, provenance: registryProvenance(registry), item: projectItem(item, detail) };
}
function getContract(registry, input = {}) {
  fields(input, ["detail"]);
  const detail = detailLevel(input), base = { schemaVersion: SITE_METADATA.versions.registrySchema, release: registry.release, detail, provenance: registryProvenance(registry) };
  const nextDetail = detail === "brief" ? "compact" : "full";
  const next = { api: `${API_BASE_PATH}/capabilities.json?detail=${nextDetail}`, cli: `${BUN_CLI_COMMAND} contract --detail ${nextDetail}`, tool: { name: "klic_get_contract", arguments: { detail: nextDetail } } };
  if (detail === "brief")
    return { ...base, next };
  return { ...base, ...detail === "full" ? systemFields(registry) : {}, metadata: registry.metadata, capabilities: registry.capabilities, counts: registry.counts, policy: registry.policy, links: registry.links, ...detail === "compact" ? { next } : {} };
}
function getDeliveryPlan(registry, input) {
  fields(input, ["kind", "id", "framework"]);
  const { item } = getRegistryItem(registry, { kind: input.kind, id: input.id });
  if (item.status !== "ready" || !item.install?.manifest)
    throw new RegistryError("SOURCE_UNAVAILABLE", "This item has no source bundle.");
  const defaultFramework = item.kind === "component" ? "html" : "react", framework = input.framework ?? defaultFramework, capability = item.frameworks?.[framework], manifest = item.install.frameworks?.[framework]?.manifest;
  if (!["html", "react", "vue"].includes(framework) || !capability || capability.status !== "available" || !manifest)
    throw new RegistryError("SOURCE_UNAVAILABLE", `No ${framework} source workspace is available for this item.`);
  const option = input.framework === undefined ? "" : ` --framework ${framework}`, directory = `./klic-${item.id}-${framework}`;
  return {
    schemaVersion: SITE_METADATA.versions.registrySchema,
    ...systemFields(registry),
    release: registry.release,
    kind: item.kind,
    id: item.id,
    framework,
    manifest,
    commands: { plan: `${BUN_CLI_COMMAND} plan ${item.kind} ${item.id}${option}`, add: `${BUN_CLI_COMMAND} add ${item.kind} ${item.id}${option} --out ${directory}` },
    policy: `${cliPackageAvailability()} Creates a new standalone ${framework} workspace. Includes shared runtime and source notices. Does not run npm, shell commands, or overwrite existing paths.`
  };
}
var THEME_PROFILES = ["core", "studio", "data"];
var THEME_MATERIALS = ["flat", "glass", "solid-glass", "liquid-glass"];
var THEME_MODES = ["system", "light", "dark"];
function themeQuery(input) {
  fields(input, ["query", "detail"]);
  const query = input.query === undefined ? "" : input.query;
  if (typeof query !== "string" || query.length > 200)
    invalid("query must be a string of at most 200 characters.");
  return query.trim().toLocaleLowerCase();
}
function themeId(input) {
  if (typeof input.id !== "string" || !/^[a-z0-9-]{1,90}$/.test(input.id))
    invalid("Provide a valid theme id.");
  return input.id;
}
function themeSelection(input) {
  fields(input, ["id", "profile", "material", "mode"]);
  const id = themeId(input), profile = input.profile === undefined ? "core" : input.profile, material = input.material === undefined ? "flat" : input.material, mode = input.mode === undefined ? "system" : input.mode;
  if (!THEME_PROFILES.includes(profile))
    invalid("profile must be core, studio or data.");
  if (!THEME_MATERIALS.includes(material))
    invalid("material must be flat, glass, solid-glass or liquid-glass.");
  if (!THEME_MODES.includes(mode))
    invalid("mode must be system, light or dark.");
  return { id, profile, material, mode };
}
function themeCatalog(registry) {
  if (!registry.themes)
    throw new RegistryError("SOURCE_UNAVAILABLE", "This registry does not provide theme kits.");
  const catalog = registry.themes;
  if (!record(catalog) || catalog.schemaVersion !== SITE_METADATA.versions.themeSchema || typeof catalog.defaultTheme !== "string" || !Array.isArray(catalog.items) || !Array.isArray(catalog.profiles) || !Array.isArray(catalog.materials) || !Array.isArray(catalog.modes) || !record(catalog.inventory))
    throw new RegistryError("INVALID_REGISTRY", "Invalid theme catalog.");
  const ids = new Set;
  for (const item of catalog.items) {
    if (!record(item) || typeof item.id !== "string" || !/^[a-z0-9-]{1,90}$/.test(item.id) || ids.has(item.id) || typeof item.name !== "string" || !record(item.light) || !record(item.dark))
      throw new RegistryError("INVALID_REGISTRY", "Invalid theme definition in catalog.");
    ids.add(item.id);
  }
  return catalog;
}
function themeItem(registry, id) {
  const catalog = themeCatalog(registry), theme = catalog.items.find((item) => item.id === id);
  if (!theme)
    throw new RegistryError("NOT_FOUND", `No theme named ${id}.`);
  return { catalog, theme };
}
function themeUsage(id, profile = "core", material = "flat", mode = "system", directory = `./klic-theme-${id}`) {
  return { cssImport: `import '${directory}/theme.css';`, apply: `import { applyTheme } from '${directory}/apply-theme.mjs';
const theme = applyTheme(document.documentElement);`, attributes: { "data-klic-theme": id, "data-color-theme": id, "data-brand-profile": profile, "data-material": material, ...mode === "system" ? {} : { "data-theme": mode } }, mode: mode === "system" ? "Omit data-theme for system mode, or set it to light or dark." : `Use data-theme="${mode}" for explicit ${mode} mode.`, plan: `${BUN_CLI_COMMAND} theme plan ${id}` };
}
function themeNext(id, detail) {
  const nextDetail = detail === "brief" ? "compact" : "full";
  return { api: `${API_BASE_PATH}/themes/${id}.json?detail=${nextDetail}`, cli: `${BUN_CLI_COMMAND} theme get ${id} --detail ${nextDetail}`, tool: { name: "klic_get_theme", arguments: { id, detail: nextDetail } } };
}
function projectTheme(theme, detail) {
  if (detail === "full")
    return theme;
  const { light, dark, ...summary } = theme;
  if (detail === "brief")
    return { id: theme.id, name: theme.name, ...theme.label ? { label: theme.label } : {}, ...theme.description ? { description: theme.description } : {}, next: themeNext(theme.id, detail) };
  return { ...summary, palette: { lightTokens: Object.keys(light || {}).length, darkTokens: Object.keys(dark || {}).length }, next: themeNext(theme.id, detail) };
}
function listThemes(registry, input = {}) {
  const query = themeQuery(input), detail = detailLevel(input), catalog = themeCatalog(registry);
  const items = catalog.items.filter((theme) => !query || [theme.id, theme.name, theme.label, theme.description, theme.source?.name].join(" ").toLocaleLowerCase().includes(query));
  return { schemaVersion: SITE_METADATA.versions.themeSchema, ...detail === "full" ? systemFields(registry) : {}, release: registry.release, detail, provenance: registryProvenance(registry, SITE_METADATA.versions.themeSchema), ...catalog.sourceRevision ? { sourceRevision: catalog.sourceRevision } : {}, defaultTheme: catalog.defaultTheme, profiles: catalog.profiles, materials: catalog.materials, modes: catalog.modes, items: items.map((theme) => projectTheme(theme, detail)), ...detail === "full" ? { inventory: catalog.inventory } : {} };
}
function getTheme(registry, input = {}) {
  fields(input, ["id", "detail"]);
  const detail = detailLevel(input), id = themeId(input), { catalog, theme } = themeItem(registry, id);
  return { schemaVersion: SITE_METADATA.versions.themeSchema, ...detail === "full" ? systemFields(registry) : {}, release: registry.release, detail, provenance: registryProvenance(registry, SITE_METADATA.versions.themeSchema), theme: projectTheme(theme, detail), profiles: catalog.profiles, materials: catalog.materials, modes: catalog.modes, usage: themeUsage(id) };
}
function getThemeDeliveryPlan(registry, input = {}) {
  const { id, profile, material, mode } = themeSelection(input);
  themeItem(registry, id);
  const options = `${id} --profile ${profile} --material ${material} --mode ${mode}`, apiBasePath = registry.capabilities?.api?.basePath?.replace(/\/$/, "") || API_BASE_PATH;
  return { schemaVersion: SITE_METADATA.versions.themeSchema, ...systemFields(registry), release: registry.release, kind: "theme", id, profile, material, mode, manifest: `${apiBasePath}/theme-bundles/${id}/${profile}/${material}/${mode}.json`, commands: { plan: `${BUN_CLI_COMMAND} theme plan ${options}`, add: `${BUN_CLI_COMMAND} theme add ${options} --out ./klic-theme-${id}` }, policy: `${cliPackageAvailability()} Creates a new standalone theme kit folder after integrity verification. Import its CSS and apply it in your app. Does not edit an existing app, run npm or shell commands, or overwrite existing paths.` };
}
var KLIC_SCHEMA_DRAFT = "https://json-schema.org/draft/2020-12/schema";
var schemaRef = (name) => ({ $ref: `#/$defs/${name}` });
var schemaObject = (required, properties, extra = {}) => ({ type: "object", required, properties, ...extra });
var stringList = { type: "array", items: { type: "string" } };
var openMetadataObject = { type: "object", description: "Public metadata is assembled from versioned configuration and permits additive fields.", additionalProperties: true };
var CHART_CONTRACT_SCHEMA = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "KLIC Chart Contract",
  type: "object",
  required: [
    "schemaVersion",
    "id",
    "origin",
    "family",
    "useWhen",
    "avoidWhen",
    "takeaway",
    "data",
    "accessibility",
    "qa"
  ],
  properties: {
    schemaVersion: {
      const: "1.0"
    },
    id: {
      type: "string",
      pattern: "^[a-z0-9-]{1,90}$"
    },
    origin: {
      enum: [
        "mit-licensed-adaptation",
        "klic-authored"
      ]
    },
    family: {
      type: "string",
      minLength: 1
    },
    useWhen: {
      type: "object",
      required: [
        "ko",
        "en"
      ],
      properties: {
        ko: {
          type: "string",
          minLength: 1
        },
        en: {
          type: "string",
          minLength: 1
        }
      },
      additionalProperties: false
    },
    avoidWhen: {
      type: "object",
      required: [
        "ko",
        "en"
      ],
      properties: {
        ko: {
          type: "string",
          minLength: 1
        },
        en: {
          type: "string",
          minLength: 1
        }
      },
      additionalProperties: false
    },
    takeaway: {
      type: "object",
      required: [
        "ko",
        "en"
      ],
      properties: {
        ko: {
          type: "string",
          minLength: 1
        },
        en: {
          type: "string",
          minLength: 1
        }
      },
      additionalProperties: false
    },
    data: {
      type: "object",
      required: [
        "synthetic",
        "exactTable",
        "note"
      ],
      properties: {
        synthetic: {
          const: true
        },
        exactTable: {
          type: "boolean"
        },
        note: {
          type: "object",
          required: [
            "ko",
            "en"
          ],
          properties: {
            ko: {
              type: "string",
              minLength: 1
            },
            en: {
              type: "string",
              minLength: 1
            }
          },
          additionalProperties: false
        }
      },
      additionalProperties: false
    },
    accessibility: {
      type: "object",
      required: [
        "keyboard",
        "exactData",
        "reducedMotion"
      ],
      properties: {
        keyboard: {
          type: "object",
          required: [
            "ko",
            "en"
          ],
          properties: {
            ko: {
              type: "string",
              minLength: 1
            },
            en: {
              type: "string",
              minLength: 1
            }
          },
          additionalProperties: false
        },
        exactData: {
          type: "object",
          required: [
            "ko",
            "en"
          ],
          properties: {
            ko: {
              type: "string",
              minLength: 1
            },
            en: {
              type: "string",
              minLength: 1
            }
          },
          additionalProperties: false
        },
        reducedMotion: {
          type: "object",
          required: [
            "ko",
            "en"
          ],
          properties: {
            ko: {
              type: "string",
              minLength: 1
            },
            en: {
              type: "string",
              minLength: 1
            }
          },
          additionalProperties: false
        }
      },
      additionalProperties: false
    },
    qa: {
      type: "object",
      required: [
        "responsive",
        "theme",
        "labels",
        "tableParity"
      ],
      properties: {
        responsive: {
          type: "string",
          minLength: 1
        },
        theme: {
          type: "string",
          minLength: 1
        },
        labels: {
          type: "string",
          minLength: 1
        },
        tableParity: {
          type: "string",
          minLength: 1
        }
      },
      additionalProperties: false
    }
  },
  additionalProperties: false
};
var KLIC_SCHEMA_COMPONENTS = {
  Detail: { type: "string", enum: DETAIL_LEVELS, default: "full" },
  LocalePair: schemaObject(["ko", "en"], { ko: { type: "string", minLength: 1 }, en: { type: "string", minLength: 1 } }),
  FrameworkSupport: schemaObject(["status", "language", "implementation"], { status: { type: "string", enum: ["available"] }, language: { type: "string", enum: ["html", "tsx", "vue"] }, implementation: { type: "string" }, source: schemaObject(["path", "usage", "notice"], { path: { type: "string" }, language: { type: "string", enum: ["html", "tsx", "vue"] }, usage: { const: "reference" }, notice: { type: "string" } }) }),
  FrameworkMap: { type: "object", propertyNames: { enum: ["html", "react", "vue"] }, additionalProperties: schemaRef("FrameworkSupport") },
  DesignSystemRef: schemaObject(["schemaVersion", "revision", "definition", "docs"], { schemaVersion: { const: SITE_METADATA.versions.designSystemSchema }, revision: { type: "string", pattern: "^[a-f0-9]{64}$" }, definition: { type: "string" }, docs: { type: "string" } }),
  DesignDimension: schemaObject(["id", "title", "tokenControl", "structureControl", "check", "tokenPaths", "requirements", "sources", "checks"], { id: { type: "string" }, title: { type: "string" }, tokenControl: { type: "string" }, structureControl: { type: "string" }, check: { type: "string" }, tokenPaths: stringList, requirements: stringList, sources: stringList, checks: stringList }),
  ConflictRule: schemaObject(["id", "title", "rule"], { id: { type: "string" }, title: { type: "string" }, rule: { type: "string" } }),
  PresetPolicy: schemaObject(["kind", "description", "allowed", "excluded", "precedence", "validation", "currentExample"], { kind: { const: "configuration-recipe" }, description: { type: "string" }, allowed: { type: "string" }, excluded: stringList, precedence: { type: "string" }, validation: { type: "string" }, currentExample: { type: "string" } }),
  DesignProvenance: schemaObject(["tokenLiteralOwnership", "recipeBoundary", "verification", "motionCatalogBoundary"], { tokenLiteralOwnership: { type: "string" }, recipeBoundary: { type: "string" }, verification: { type: "string" }, motionCatalogBoundary: { type: "string" } }),
  DesignLinks: schemaObject(["definition", "architecture", "docs", "requirements"], { definition: { type: "string" }, architecture: { type: "string" }, docs: { type: "string" }, requirements: { type: "string" } }),
  AdoptionPolicy: schemaObject(["selection", "evidence"], { selection: { type: "string" }, evidence: { type: "string" } }),
  ChangePolicy: schemaObject(["scope", "surfaces", "completion"], { scope: { type: "string" }, surfaces: stringList, completion: { type: "string" } }),
  ClassNamespace: schemaObject(["prefix", "role", "usage", "example"], { prefix: { type: "string" }, role: { type: "string" }, usage: { type: "string" }, example: { type: "string" } }),
  VariantAxis: schemaObject(["axis", "label", "values", "rule"], { axis: { type: "string", enum: ["intent", "appearance", "size", "density"] }, label: { type: "string" }, values: stringList, rule: { type: "string" } }),
  ClassNamingPolicy: schemaObject(["title", "namespaces", "variantAxes", "tokenPrecedence", "rules", "compatibility"], { title: { type: "string" }, namespaces: { type: "array", minItems: 5, maxItems: 5, items: schemaRef("ClassNamespace") }, variantAxes: { type: "array", minItems: 4, maxItems: 4, items: schemaRef("VariantAxis") }, tokenPrecedence: { type: "string" }, rules: stringList, compatibility: { type: "string" } }),
  DataAttribute: schemaObject(["name", "role", "values"], { name: { type: "string", enum: ["data-part", "data-state", "data-theme"] }, role: { type: "string" }, values: { type: "string" } }),
  DataAttributePolicy: schemaObject(["title", "attributes", "extensions", "rules"], { title: { type: "string" }, attributes: { type: "array", minItems: 3, maxItems: 3, items: schemaRef("DataAttribute") }, extensions: stringList, rules: stringList }),
  MotionTransition: schemaObject(["component", "from", "to", "effect"], { component: { type: "string" }, from: { type: "string" }, to: { type: "string" }, effect: { type: "string" } }),
  MotionResponsibilityPolicy: schemaObject(["title", "transitions", "ownership", "rules"], { title: { type: "string" }, transitions: { type: "array", minItems: 2, items: schemaRef("MotionTransition") }, ownership: { type: "object", additionalProperties: { type: "string" } }, rules: stringList }),
  ComponentContractPolicy: schemaObject(["title", "facets", "rules"], { title: { type: "string" }, facets: stringList, rules: stringList }),
  DiscoveryPolicy: schemaObject(["title", "detailLevels", "defaultDetail", "rules"], { title: { type: "string" }, detailLevels: { type: "array", const: [...DETAIL_LEVELS], items: { type: "string", enum: DETAIL_LEVELS }, minItems: 3, maxItems: 3 }, defaultDetail: { const: "full" }, rules: stringList }),
  CustomizationPolicy: schemaObject(["title", "steps", "rules"], { title: { type: "string" }, steps: { type: "array", const: ["theme", "composition", "source"], items: { type: "string", enum: ["theme", "composition", "source"] }, minItems: 3, maxItems: 3 }, rules: stringList }),
  InteractionPolicy: schemaObject(["title", "rules"], { title: { type: "string" }, rules: stringList }),
  ConsumerEvaluationPolicy: schemaObject(["title", "tasks", "rules"], { title: { type: "string" }, tasks: stringList, rules: stringList }),
  DesignSystem: schemaObject(["schemaVersion", "architectureSchemaVersion", "namespace", "tokenLayers", "date", "scope", "dimensions", "conflictResolution", "presetPolicy", "provenance", "links", "adoptionPolicy", "changePolicy", "componentContractPolicy", "discoveryPolicy", "customizationPolicy", "interactionPolicy", "consumerEvaluationPolicy", "revision"], {
    schemaVersion: { const: SITE_METADATA.versions.designSystemSchema },
    architectureSchemaVersion: { const: 1 },
    namespace: { const: "klic." },
    tokenLayers: { const: ["Primitive", "Brand", "Semantic", "Component"] },
    date: { type: "string" },
    scope: { type: "string" },
    dimensions: { type: "array", minItems: 7, maxItems: 7, items: schemaRef("DesignDimension") },
    conflictResolution: { type: "array", items: schemaRef("ConflictRule") },
    presetPolicy: schemaRef("PresetPolicy"),
    provenance: schemaRef("DesignProvenance"),
    links: schemaRef("DesignLinks"),
    adoptionPolicy: schemaRef("AdoptionPolicy"),
    changePolicy: schemaRef("ChangePolicy"),
    classNamingPolicy: schemaRef("ClassNamingPolicy"),
    dataAttributePolicy: schemaRef("DataAttributePolicy"),
    motionResponsibilityPolicy: schemaRef("MotionResponsibilityPolicy"),
    componentContractPolicy: schemaRef("ComponentContractPolicy"),
    discoveryPolicy: schemaRef("DiscoveryPolicy"),
    customizationPolicy: schemaRef("CustomizationPolicy"),
    interactionPolicy: schemaRef("InteractionPolicy"),
    consumerEvaluationPolicy: schemaRef("ConsumerEvaluationPolicy"),
    revision: { type: "string", pattern: "^[a-f0-9]{64}$" }
  }),
  Responder: schemaObject(["transport"], { transport: { type: "string" }, packageName: { type: "string" }, packageVersion: { type: "string" }, binSha256: { type: "string", pattern: "^[a-f0-9]{64}$" } }),
  Provenance: schemaObject(["schemaVersion", "catalogRelease", "designRevision", "toolkitVersion"], { schemaVersion: { type: "string" }, catalogRelease: { type: ["string", "null"] }, designRevision: { type: ["string", "null"] }, toolkitVersion: { type: "string" }, links: { type: "object", properties: { designSystem: schemaObject(["revision", "api"], { revision: { type: "string", pattern: "^[a-f0-9]{64}$" }, api: { type: "string" }, source: { type: "string" }, docs: { type: "string" } }) } }, responder: schemaRef("Responder") }),
  NextToolArguments: { oneOf: [schemaObject(["kind", "id", "detail"], { kind: { type: "string", enum: ["component", "block"] }, id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, detail: schemaRef("Detail") }, { additionalProperties: false }), schemaObject(["id", "detail"], { id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, detail: schemaRef("Detail") }, { additionalProperties: false }), schemaObject(["detail"], { detail: schemaRef("Detail") }, { additionalProperties: false })] },
  NextLookup: schemaObject(["api", "cli", "tool"], { api: { type: "string" }, cli: { type: "string" }, tool: schemaObject(["name", "arguments"], { name: { type: "string", enum: ["klic_get_item", "klic_get_motion", "klic_get_theme", "klic_get_contract"] }, arguments: schemaRef("NextToolArguments") }) }),
  TokenMapping: schemaObject(["path", "purpose", "cssVariable", "cssProperty", "value", "chain", "tailwind"], { path: { type: "string", pattern: "^klic\\." }, purpose: { type: "string" }, cssVariable: { type: "string", pattern: "^--klic-" }, cssProperty: { type: "string" }, value: { type: ["string", "null"] }, chain: stringList, tailwind: { type: "string" } }),
  TokenContext: schemaObject(["heightFixture", "mode", "density", "basis"], { heightFixture: { type: "string", enum: ["a", "b"] }, mode: { type: "string", enum: ["light", "dark"] }, density: { type: "string", enum: ["compact", "normal", "relaxed"] }, basis: { type: "string", enum: ["static-example", "resolved-selection"] } }),
  VariantSupportAxis: schemaObject(["axis", "values", "evidence"], { axis: { type: "string", enum: ["intent", "appearance", "size", "density"] }, values: stringList, evidence: { type: "string" } }),
  VariantSupport: schemaObject(["status", "axes", "examples", "note"], { status: { type: "string", enum: ["specified", "partially-specified", "not-specified"] }, axes: { type: "array", items: schemaRef("VariantSupportAxis") }, examples: stringList, note: { type: "string" } }),
  DesignState: schemaObject(["name", "condition", "response"], { name: { type: "string" }, condition: { type: "string" }, response: { type: "string" } }),
  ChartContract: CHART_CONTRACT_SCHEMA,
  DesignContract: schemaObject(["delivery", "system", "schemaVersion", "scope", "implementation", "tokenContext", "variantSupport", "use", "avoid", "accessibility", "density", "states", "recovery", "tokenMapping", "limitations", "checklist", "exports", "prompt"], {
    delivery: schemaObject(["type", "npmPackagePublished", "scope", "licenses"], { type: { const: "reference-library" }, npmPackagePublished: { type: "boolean" }, npmPackage: { type: "object", required: ["name", "version", "status"], properties: { name: { type: "string" }, version: { type: "string" }, status: { type: "string" }, registry: { type: "string" }, exports: stringList } }, scope: { type: "string" }, licenses: { type: "string" } }),
    system: schemaRef("DesignSystemRef"),
    schemaVersion: { const: SITE_METADATA.versions.designContractSchema },
    scope: { const: "adoption-guidance" },
    implementation: { type: "string", enum: ["planned", "native-html", "react-demo"] },
    tokenContext: schemaRef("TokenContext"),
    variantSupport: schemaRef("VariantSupport"),
    use: stringList,
    avoid: stringList,
    accessibility: stringList,
    density: { type: "object", propertyNames: { enum: ["compact", "normal", "relaxed"] }, additionalProperties: { type: "string" } },
    states: { type: "array", items: schemaRef("DesignState") },
    recovery: schemaObject(["loading", "empty", "filtered", "error"], { loading: { type: "string" }, empty: { type: "string" }, filtered: { type: "string" }, error: { type: "string" } }),
    tokenMapping: { type: "array", items: schemaRef("TokenMapping") },
    limitations: stringList,
    checklist: stringList,
    exports: schemaObject(["design", "contract", "types"], { design: { type: "string" }, contract: { type: "string" }, types: { type: "string" } }),
    prompt: { type: "string" },
    chart: schemaRef("ChartContract"),
    behavior: { type: "object", description: "Component-family interaction contracts vary by family and are intentionally extensible.", additionalProperties: true }
  }),
  SourceFile: schemaObject(["path", "language", "usage", "notice"], { path: { type: "string" }, language: { type: "string", enum: ["html", "tsx", "vue"] }, usage: { const: "reference" }, notice: { type: "string" }, dependencies: stringList, module: { type: "string" }, variant: { type: ["string", "null"] }, manifest: { type: "string" } }),
  ItemInstall: schemaObject(["manifest", "mode", "preservesNotices"], { manifest: { type: "string" }, mode: { type: "string" }, preservesNotices: { type: "boolean" }, dependencies: stringList, frameworks: { type: "object", propertyNames: { enum: ["html", "react", "vue"] }, additionalProperties: schemaObject(["manifest"], { manifest: { type: "string" } }) } }),
  ItemBase: schemaObject(["id", "kind", "name", "description", "category", "status", "route"], {
    id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" },
    kind: { type: "string", enum: ["component", "block"] },
    name: { type: "string" },
    labels: schemaRef("LocalePair"),
    description: { type: "string" },
    category: { type: "string" },
    categoryName: { type: "string" },
    categoryLabels: schemaRef("LocalePair"),
    collection: { type: "string" },
    tags: stringList,
    status: { type: "string", enum: ["ready", "planned"] },
    route: { type: "string", pattern: "^#(?:component|blocks)/" },
    docsRoute: { type: "string" },
    source: { oneOf: [{ type: "null" }, schemaRef("SourceFile")] },
    frameworks: schemaRef("FrameworkMap"),
    token: { type: "string" },
    rule: { type: "string" },
    structure: { type: "object", description: "Item-specific composition metadata is additive.", additionalProperties: true },
    variants: { type: "array", items: { type: "object", description: "Variant metadata is defined by the component family.", additionalProperties: true } },
    design: schemaRef("DesignContract"),
    install: schemaRef("ItemInstall"),
    shareUrl: { type: "string" },
    canonicalUrl: { type: "string" },
    aliasOf: { type: ["string", "null"] },
    aliasReason: { type: "string" }
  }, { additionalProperties: true }),
  Item: { allOf: [schemaRef("ItemBase"), { type: "object", required: ["source", "design"] }] },
  ItemBrief: schemaObject(["id", "kind", "name", "description", "status", "route", "next"], { id: { type: "string" }, kind: { type: "string", enum: ["component", "block"] }, name: { type: "string" }, labels: schemaRef("LocalePair"), categoryLabels: schemaRef("LocalePair"), frameworks: schemaRef("FrameworkMap"), description: { type: "string" }, status: { type: "string", enum: ["ready", "planned"] }, route: { type: "string" }, next: schemaRef("NextLookup") }),
  ItemCompact: { allOf: [schemaRef("ItemBase"), schemaObject(["next"], { source: { oneOf: [{ type: "null" }, schemaRef("SourceFile")] }, install: schemaRef("ItemInstall"), design: schemaObject([], { chart: schemaRef("ChartContract") }, { description: "Compact item contracts omit prompts and source examples but preserve chart selection guidance.", additionalProperties: true }), next: schemaRef("NextLookup") })] },
  MotionLocale: schemaObject(["ko", "en"], { ko: { type: "string" }, en: { type: "string" } }),
  MotionReference: schemaObject(["id", "pattern", "route", "engine", "demoId", "sourceCategory", "durationMs", "engineDuration", "sourceLabel", "sourceLicense", "licensePath"], { id: { type: "string" }, pattern: { type: "string" }, route: { type: "string" }, engine: { type: "string", enum: ["atlas", "semantic", "text"] }, demoId: { type: "string" }, sourceCategory: { type: "string" }, durationMs: { type: "integer", minimum: 1 }, engineDuration: { type: "integer", minimum: 1 }, sourceLabel: schemaRef("MotionLocale"), sourceLicense: { type: "string", enum: ["motion-catalog-acc0mplish", "klic-authored"] }, licensePath: { type: "string", enum: ["motion-source/reference/LICENSE.md", "motion-source/klic/flowmotion/NOTICE.md", "motion-source/klic/motion-recipes/NOTICE.md"] }, collection: { type: "string", enum: ["klic-flowmotion", "klic-motion-recipes"] }, definitionPath: { type: "string" }, sourceRecord: { type: "string" }, origin: { type: "object", description: "Per-source attribution metadata is intentionally extensible.", additionalProperties: true }, routeDisambiguated: { type: "boolean" } }),
  Motion: schemaObject(["id", "category", "source", "title", "summary", "trigger", "durationMs", "staggerMs", "easing", "useCases", "cautions", "reducedMotion", "preview", "reference", "implementation", "route"], { id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, category: { type: "string", enum: MOTION_CATEGORY_IDS }, source: { type: "string", enum: ["motion-catalog-adapted", "klic-authored"] }, title: schemaRef("MotionLocale"), summary: schemaRef("MotionLocale"), trigger: schemaRef("MotionLocale"), durationMs: { type: "integer", minimum: 1, maximum: 60000 }, staggerMs: { type: "integer", minimum: 0, maximum: 5000 }, easing: { type: "string" }, useCases: { type: "array", items: schemaRef("MotionLocale") }, cautions: { type: "array", items: schemaRef("MotionLocale") }, reducedMotion: schemaRef("MotionLocale"), preview: { type: "object", description: "Renderer-specific preview parameters are intentionally extensible.", additionalProperties: true }, reference: schemaRef("MotionReference"), implementation: schemaObject(["css", "js", "react", "vue", "format", "requiresRuntime"], { css: { type: "string" }, js: { type: "string" }, react: { type: "string" }, vue: { type: "string" }, format: { const: "shared-motion-runtime" }, requiresRuntime: { const: true } }), route: { type: "string", pattern: "^#motion/[a-z0-9-]+$" } }),
  MotionBrief: schemaObject(["id", "category", "title", "summary", "route", "reference", "next"], { id: { type: "string" }, category: { type: "string", enum: MOTION_CATEGORY_IDS }, title: schemaRef("MotionLocale"), summary: schemaRef("MotionLocale"), route: { type: "string" }, reference: schemaRef("MotionReference"), next: schemaRef("NextLookup") }),
  MotionCompact: schemaObject(["id", "category", "title", "summary", "route", "implementation", "next"], { id: { type: "string" }, category: { type: "string", enum: MOTION_CATEGORY_IDS }, source: { type: "string", enum: ["motion-catalog-adapted", "klic-authored"] }, title: schemaRef("MotionLocale"), summary: schemaRef("MotionLocale"), trigger: schemaRef("MotionLocale"), durationMs: { type: "integer", minimum: 1 }, staggerMs: { type: "integer", minimum: 0 }, easing: { type: "string" }, useCases: { type: "array", items: schemaRef("MotionLocale") }, cautions: { type: "array", items: schemaRef("MotionLocale") }, reducedMotion: schemaRef("MotionLocale"), preview: { type: "object", description: "Renderer-specific preview parameters are intentionally extensible.", additionalProperties: true }, reference: schemaRef("MotionReference"), implementation: schemaObject(["format", "requiresRuntime"], { format: { const: "shared-motion-runtime" }, requiresRuntime: { const: true } }), next: schemaRef("NextLookup"), route: { type: "string" } }, { additionalProperties: true }),
  MotionCatalog: schemaObject(["schemaVersion", "release", "categories", "total", "source", "items"], { schemaVersion: { const: "2.0" }, release: { type: "string", pattern: "^[a-f0-9]{16}$" }, categories: { type: "array", minItems: MOTION_CATALOG_INVENTORY.categories, maxItems: MOTION_CATALOG_INVENTORY.categories, items: schemaObject(["id", "label", "icon", "description", "count"], { id: { type: "string", enum: MOTION_CATEGORY_IDS }, label: schemaRef("MotionLocale"), icon: { type: "string" }, description: schemaRef("MotionLocale"), count: { type: "integer", minimum: 0 } }) }, total: { const: MOTION_CATALOG_INVENTORY.total }, source: { const: MOTION_CATALOG_INVENTORY.source }, items: { type: "array", minItems: MOTION_CATALOG_INVENTORY.total, maxItems: MOTION_CATALOG_INVENTORY.total, items: schemaRef("Motion") } }),
  ThemeSource: schemaObject(["name", "hex"], { name: { type: "string" }, hex: { type: "string" } }),
  ThemeProfile: schemaObject(["id", "name"], { id: { type: "string" }, name: { type: "string" } }),
  Theme: schemaObject(["id", "name", "light", "dark"], { id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, name: { type: "string" }, label: { type: "string" }, description: { type: "string" }, source: schemaRef("ThemeSource"), light: { type: "object", description: "Theme token values are a versioned string map.", additionalProperties: { type: "string" } }, dark: { type: "object", description: "Theme token values are a versioned string map.", additionalProperties: { type: "string" } } }, { additionalProperties: true }),
  ThemeBrief: schemaObject(["id", "name", "next"], { id: { type: "string" }, name: { type: "string" }, label: { type: "string" }, description: { type: "string" }, next: schemaRef("NextLookup") }),
  ThemeCompact: schemaObject(["id", "name", "palette", "next"], { id: { type: "string" }, name: { type: "string" }, label: { type: "string" }, description: { type: "string" }, palette: schemaObject(["lightTokens", "darkTokens"], { lightTokens: { type: "integer", minimum: 0 }, darkTokens: { type: "integer", minimum: 0 } }), next: schemaRef("NextLookup") }),
  ThemeUsage: schemaObject(["cssImport", "apply", "attributes", "mode", "plan"], { cssImport: { type: "string" }, apply: { type: "string" }, attributes: { type: "object", additionalProperties: { type: "string" } }, mode: { type: "string" }, plan: { type: "string" } }),
  ThemeCatalog: schemaObject(["schemaVersion", "defaultTheme", "profiles", "materials", "modes", "items", "inventory"], { schemaVersion: { const: SITE_METADATA.versions.themeSchema }, release: { type: "string" }, sourceRevision: { type: "string" }, defaultTheme: { type: "string" }, profiles: { type: "array", items: schemaRef("ThemeProfile") }, materials: stringList, modes: stringList, items: { type: "array", items: schemaRef("Theme") }, inventory: { type: "object", additionalProperties: { type: "integer", minimum: 0 } } }),
  ChartChannel: schemaObject(["name", "kind", "required"], { name: { type: "string" }, kind: { type: "string", enum: ["categorical", "ordinal", "quantitative", "temporal"] }, kinds: stringList, required: { type: "boolean" } }),
  ChartType: schemaObject(["id", "family", "support", "channels", "interactions", "keyboard", "reducedMotion"], { id: { type: "string" }, family: { type: "string" }, support: { const: "authorable" }, channels: { type: "array", items: schemaRef("ChartChannel") }, options: { type: "object" }, interactions: stringList, keyboard: { type: "string" }, reducedMotion: { type: "string" } }),
  ChartError: schemaObject(["path", "code", "message"], { path: { type: "string" }, code: { type: "string" }, message: { type: "string" } }),
  ChartTable: schemaObject(["caption", "columns", "rows"], { caption: { type: "string" }, columns: stringList, rows: { type: "array", items: { type: "array", items: { oneOf: [{ type: "string" }, { type: "number" }, { type: "boolean" }, { type: "null" }] } } } }),
  ChartSummary: schemaObject(["title", "type", "rows", "omittedRows", "marks"], { title: { type: "string" }, type: { type: "string" }, rows: { type: "integer", minimum: 0 }, omittedRows: { type: "integer", minimum: 0 }, marks: { type: "integer", minimum: 0 } }),
  ErrorResult: schemaObject(["error"], { error: schemaObject(["code", "message"], { code: { type: "string" }, message: { type: "string" } }) }),
  Metadata: openMetadataObject,
  Capabilities: { type: "object", description: "Transport capabilities are versioned and permit additive details.", properties: { api: openMetadataObject, cli: openMetadataObject, mcp: openMetadataObject, webmcp: openMetadataObject, skill: openMetadataObject, themes: openMetadataObject, motions: openMetadataObject }, additionalProperties: true },
  Counts: { type: "object", description: "Catalog counters are integer-valued and may grow additively.", additionalProperties: { type: "integer", minimum: 0 } },
  ContractPolicy: openMetadataObject,
  PublicLinks: { type: "object", additionalProperties: { type: "string" } },
  ThemeBundle: schemaObject(["schemaVersion", "kind", "files", "dependencies"], { schemaVersion: { const: SITE_METADATA.versions.bundleSchema }, kind: { const: "theme" }, files: { type: "array", items: schemaObject(["path", "url", "bytes", "sha256"], { path: { type: "string" }, url: { type: "string" }, bytes: { type: "integer", minimum: 0 }, sha256: { type: "string", pattern: "^[a-f0-9]{64}$" } }) }, dependencies: { type: "object", additionalProperties: { type: "string" } }, designSystem: schemaRef("DesignSystem") })
};
var responseProvenanceProperties = { provenance: schemaRef("Provenance"), detail: schemaRef("Detail"), designSystem: schemaRef("DesignSystem") };
var KLIC_SCHEMA_RESPONSES = {
  Registry: schemaObject(["schemaVersion", "release", "metadata", "counts", "capabilities", "policy", "items", "motions"], { schemaVersion: { const: SITE_METADATA.versions.registrySchema }, release: { type: "string", pattern: "^[a-f0-9]{16}$" }, metadata: schemaRef("Metadata"), counts: schemaRef("Counts"), capabilities: schemaRef("Capabilities"), policy: schemaRef("ContractPolicy"), designSystem: schemaRef("DesignSystem"), themes: schemaRef("ThemeCatalog"), motions: schemaRef("MotionCatalog"), items: { type: "array", items: schemaRef("Item") } }),
  DesignSystemSnapshot: schemaObject(["schemaVersion", "release", "designSystem", "provenance"], { schemaVersion: { const: SITE_METADATA.versions.designSystemSchema }, release: { type: "string" }, designSystem: schemaRef("DesignSystem"), provenance: schemaRef("Provenance") }),
  SearchResult: schemaObject(["schemaVersion", "release", "detail", "provenance", "total", "items", "nextCursor"], { schemaVersion: { const: SITE_METADATA.versions.registrySchema }, release: { type: "string" }, ...responseProvenanceProperties, total: { type: "integer", minimum: 0 }, items: { type: "array", items: { anyOf: [schemaRef("ItemBrief"), schemaRef("ItemCompact"), schemaRef("Item")] } }, nextCursor: { type: ["string", "null"], pattern: "^\\d{1,7}$" } }),
  ItemRead: schemaObject(["schemaVersion", "release", "detail", "provenance", "item"], { schemaVersion: { const: SITE_METADATA.versions.registrySchema }, release: { type: "string" }, ...responseProvenanceProperties, item: { anyOf: [schemaRef("ItemBrief"), schemaRef("ItemCompact"), schemaRef("Item")] } }),
  ContractRead: schemaObject(["schemaVersion", "release", "detail", "provenance"], { schemaVersion: { const: SITE_METADATA.versions.registrySchema }, release: { type: "string" }, ...responseProvenanceProperties, metadata: schemaRef("Metadata"), capabilities: schemaRef("Capabilities"), counts: schemaRef("Counts"), policy: schemaRef("ContractPolicy"), links: schemaRef("PublicLinks"), next: schemaRef("NextLookup") }),
  ItemDeliveryPlan: schemaObject(["schemaVersion", "release", "kind", "id", "manifest", "commands", "policy"], { schemaVersion: { const: SITE_METADATA.versions.registrySchema }, release: { type: "string" }, designSystem: schemaRef("DesignSystem"), kind: { type: "string", enum: ["component", "block"] }, id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, framework: { type: "string", enum: ["html", "react", "vue"] }, manifest: { type: "string" }, commands: schemaObject(["plan", "add"], { plan: { type: "string" }, add: { type: "string" } }), policy: { type: "string" } }),
  MotionSearchResult: schemaObject(["schemaVersion", "release", "detail", "provenance", "total", "items", "nextCursor"], { schemaVersion: { const: "2.0" }, release: { type: "string", pattern: "^[a-f0-9]{16}$" }, ...responseProvenanceProperties, total: { type: "integer", minimum: 0 }, items: { type: "array", items: { anyOf: [schemaRef("MotionBrief"), schemaRef("MotionCompact"), schemaRef("Motion")] } }, nextCursor: { type: ["string", "null"], pattern: "^\\d{1,7}$" } }),
  MotionRead: schemaObject(["schemaVersion", "release", "detail", "provenance", "motion"], { schemaVersion: { const: "2.0" }, release: { type: "string", pattern: "^[a-f0-9]{16}$" }, ...responseProvenanceProperties, motion: { anyOf: [schemaRef("MotionBrief"), schemaRef("MotionCompact"), schemaRef("Motion")] } }),
  ThemeSearchResult: schemaObject(["schemaVersion", "release", "detail", "provenance", "defaultTheme", "profiles", "materials", "modes", "items"], { schemaVersion: { const: SITE_METADATA.versions.themeSchema }, release: { type: "string" }, ...responseProvenanceProperties, sourceRevision: { type: "string" }, defaultTheme: { type: "string" }, profiles: { type: "array", items: schemaRef("ThemeProfile") }, materials: stringList, modes: stringList, inventory: { type: "object", additionalProperties: { type: "integer", minimum: 0 } }, items: { type: "array", items: { anyOf: [schemaRef("ThemeBrief"), schemaRef("ThemeCompact"), schemaRef("Theme")] } } }),
  ThemeRead: schemaObject(["schemaVersion", "release", "detail", "provenance", "theme", "profiles", "materials", "modes", "usage"], { schemaVersion: { const: SITE_METADATA.versions.themeSchema }, release: { type: "string" }, ...responseProvenanceProperties, theme: { anyOf: [schemaRef("ThemeBrief"), schemaRef("ThemeCompact"), schemaRef("Theme")] }, profiles: { type: "array", items: schemaRef("ThemeProfile") }, materials: stringList, modes: stringList, usage: schemaRef("ThemeUsage") }),
  ThemeDeliveryPlan: schemaObject(["schemaVersion", "release", "kind", "id", "profile", "material", "mode", "manifest", "commands", "policy"], { schemaVersion: { const: SITE_METADATA.versions.themeSchema }, release: { type: "string" }, designSystem: schemaRef("DesignSystem"), kind: { const: "theme" }, id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, profile: { type: "string", enum: THEME_PROFILES }, material: { type: "string", enum: THEME_MATERIALS }, mode: { type: "string", enum: THEME_MODES }, manifest: { type: "string" }, commands: schemaObject(["plan", "add"], { plan: { type: "string" }, add: { type: "string" } }), policy: { type: "string" } }),
  ChartTypeCatalog: schemaObject(["schemaVersion", "total", "types", "provenance"], { schemaVersion: { const: "1.0" }, total: { type: "integer", minimum: 0 }, types: { type: "array", items: schemaRef("ChartType") }, provenance: schemaRef("Provenance") }),
  ChartThemeCatalog: schemaObject(["schemaVersion", "profiles", "modes", "themes", "provenance"], { schemaVersion: { const: "1.0" }, profiles: stringList, modes: stringList, themes: { type: "array", items: { type: "object", additionalProperties: true } }, provenance: schemaRef("Provenance") }),
  ChartInteractionCatalog: schemaObject(["schemaVersion", "presets", "provenance"], { schemaVersion: { const: "1.0" }, presets: { type: "array", items: { type: "object", additionalProperties: true } }, provenance: schemaRef("Provenance") }),
  ChartSkillRead: schemaObject(["schemaVersion", "skill", "contents", "provenance"], { schemaVersion: { const: "1.0" }, skill: { type: "string", enum: ["chart", "theme", "interaction", "board"] }, section: { type: "string" }, contents: { type: "string" }, provenance: schemaRef("Provenance") }),
  ChartValidation: schemaObject(["schemaVersion", "valid", "errors", "provenance"], { schemaVersion: { const: "1.0" }, valid: { type: "boolean" }, errors: { type: "array", items: schemaRef("ChartError") }, provenance: schemaRef("Provenance") }, { additionalProperties: true }),
  ChartCompilation: schemaObject(["schemaVersion", "valid", "provenance"], { schemaVersion: { const: "1.0" }, valid: { type: "boolean" }, type: { type: "string" }, family: { type: "string" }, display: { type: "object" }, plotData: { type: "object" }, table: schemaRef("ChartTable"), diagnostics: stringList, summary: schemaRef("ChartSummary"), errors: { type: "array", items: schemaRef("ChartError") }, provenance: schemaRef("Provenance") }, { additionalProperties: true }),
  ChartRender: schemaObject(["schemaVersion", "valid", "provenance"], { schemaVersion: { const: "1.0" }, valid: { type: "boolean" }, view: { type: "string", enum: ["chart", "board"] }, type: { type: "string" }, title: { type: "string" }, columns: { type: "integer", minimum: 1, maximum: 3 }, svg: { type: "string" }, table: schemaRef("ChartTable"), charts: { type: "array", items: { type: "object", additionalProperties: true } }, diagnostics: stringList, summary: schemaRef("ChartSummary"), errors: { type: "array", items: schemaRef("ChartError") }, provenance: schemaRef("Provenance") }, { additionalProperties: true }),
  ChartBoardValidation: schemaObject(["schemaVersion", "valid", "charts", "errors", "provenance"], { schemaVersion: { const: "1.0" }, valid: { type: "boolean" }, title: { type: "string" }, columns: { type: "integer", minimum: 1, maximum: 3 }, charts: { type: "array", items: { type: "object", additionalProperties: true } }, errors: { type: "array", items: schemaRef("ChartError") }, provenance: schemaRef("Provenance") }, { additionalProperties: true }),
  ThemeBundleRead: schemaRef("ThemeBundle"),
  ToolDefinitions: schemaObject(["schemaVersion", "tools"], { schemaVersion: { const: SITE_METADATA.versions.registrySchema }, tools: { type: "array", items: schemaObject(["name", "title", "description", "inputSchema", "annotations", "outputSchema"], { name: { type: "string" }, title: { type: "string" }, description: { type: "string" }, inputSchema: { type: "object", description: "Per-tool MCP input arguments are versioned and remain unchanged.", additionalProperties: true }, annotations: schemaObject(["readOnlyHint", "destructiveHint", "idempotentHint", "openWorldHint"], { readOnlyHint: { type: "boolean" }, destructiveHint: { type: "boolean" }, idempotentHint: { type: "boolean" }, openWorldHint: { type: "boolean" } }), outputSchema: { type: "object", description: "Self-contained JSON Schema 2020-12 output contract.", required: ["$schema", "$ref", "$defs"], properties: { $schema: { const: KLIC_SCHEMA_DRAFT }, $ref: { type: "string" }, $defs: { type: "object", additionalProperties: { type: "object" } } } } }) } }),
  Health: schemaObject(["status", "service", "release", "transports"], { status: { const: "ok" }, service: { const: "klic-registry" }, release: { type: "string" }, transports: stringList })
};
var KLIC_SCHEMA_DEFS = { ...KLIC_SCHEMA_COMPONENTS, ...KLIC_SCHEMA_RESPONSES };
var toolResponseTypes = { klic_search: "SearchResult", klic_get_item: "ItemRead", klic_get_contract: "ContractRead", klic_search_motions: "MotionSearchResult", klic_get_motion: "MotionRead", klic_get_install_plan: "ItemDeliveryPlan", klic_list_themes: "ThemeSearchResult", klic_get_theme: "ThemeRead", klic_get_theme_install_plan: "ThemeDeliveryPlan", klic_list_chart_types: "ChartTypeCatalog", klic_list_chart_themes: "ChartThemeCatalog", klic_list_chart_interactions: "ChartInteractionCatalog", klic_get_chart_skill: "ChartSkillRead", klic_validate_chart: "ChartValidation", klic_compile_chart: "ChartCompilation", klic_render_chart: "ChartRender", klic_show_chart: "ChartRender", klic_validate_chart_board: "ChartBoardValidation" };
var toolOutputs = Object.fromEntries(Object.entries(toolResponseTypes).map(([name, responseType]) => [name, { $schema: KLIC_SCHEMA_DRAFT, ...schemaRef(responseType), $defs: KLIC_SCHEMA_DEFS }]));
var KLIC_SCHEMA_INVENTORY = { components: KLIC_SCHEMA_COMPONENTS, responses: KLIC_SCHEMA_RESPONSES, toolOutputs };
async function installBundle(bundle, destination, fetchBytes, { dryRun = false } = {}) {
  if (bundle?.schemaVersion !== SITE_METADATA.versions.bundleSchema || !Array.isArray(bundle.files) || !bundle.files.length || bundle.files.length > 4096)
    invalid("Invalid bundle manifest.");
  const safePath = (p) => typeof p === "string" && p.split("/").every((v) => /^[a-zA-Z0-9_][a-zA-Z0-9_.&-]*$/.test(v));
  const paths = new Set;
  let total = 0;
  for (const file of bundle.files) {
    if (!safePath(file.path) || paths.has(file.path) || typeof file.url !== "string" || !file.url.startsWith("/") || file.url.startsWith("//") || !safePath(file.url.slice(1)) || !Number.isSafeInteger(file.bytes) || file.bytes < 0 || file.bytes > 20000000 || !/^[a-f0-9]{64}$/.test(file.sha256))
      invalid("Unsafe or invalid bundle file.");
    paths.add(file.path);
    total += file.bytes;
  }
  if (total > 1e8)
    invalid("Bundle exceeds 100 MB.");
  for (const p of paths) {
    let prefix = "";
    for (const part of p.split("/").slice(0, -1)) {
      prefix = prefix ? prefix + "/" + part : part;
      if (paths.has(prefix))
        invalid("Conflicting file and directory paths.");
    }
  }
  const fs = await import("node:fs/promises"), path = await import("node:path"), { createHash } = await import("node:crypto");
  if (typeof destination !== "string" || !destination.trim())
    invalid("Provide --out with a new directory.");
  const target = path.resolve(destination), parent = path.dirname(target);
  for (let current = target;; current = path.dirname(current)) {
    const stat = await fs.lstat(current).catch((e) => {
      if (e.code === "ENOENT")
        return null;
      throw e;
    });
    if (stat?.isSymbolicLink())
      throw new RegistryError("UNSAFE_DESTINATION", "Symlink destinations are not allowed.");
    if (current === target && stat)
      throw new RegistryError("DESTINATION_EXISTS", "Destination already exists. Choose a new directory.");
    if (current === path.dirname(current))
      break;
  }
  const parentStat = await fs.stat(parent).catch(() => null);
  if (!parentStat?.isDirectory())
    invalid("The destination parent directory must exist.");
  if (dryRun)
    return { dryRun: true, destination: target, files: bundle.files.length, bytes: total, dependencies: bundle.dependencies, paths: [...paths] };
  const staged = [];
  for (const file of bundle.files) {
    const bytes = new Uint8Array(await fetchBytes(file.url));
    if (bytes.byteLength !== file.bytes || createHash("sha256").update(bytes).digest("hex") !== file.sha256)
      throw new RegistryError("INTEGRITY_FAILED", `Source integrity failed: ${file.path}`);
    staged.push({ file, bytes });
  }
  const assertParent = async () => {
    if (await fs.realpath(parent) !== parent)
      throw new RegistryError("UNSAFE_DESTINATION", "Destination parent changed during download.");
    const now = await fs.lstat(parent);
    if (now.isSymbolicLink() || !now.isDirectory() || now.dev !== parentStat.dev || now.ino !== parentStat.ino)
      throw new RegistryError("UNSAFE_DESTINATION", "Destination parent identity changed.");
  };
  await assertParent();
  try {
    await fs.mkdir(target);
  } catch (e) {
    if (e.code === "EEXIST")
      throw new RegistryError("DESTINATION_EXISTS", "Destination already exists.");
    throw e;
  }
  const targetStat = await fs.lstat(target);
  const assertTarget = async () => {
    await assertParent();
    const now = await fs.lstat(target);
    if (now.isSymbolicLink() || now.dev !== targetStat.dev || now.ino !== targetStat.ino)
      throw new RegistryError("UNSAFE_DESTINATION", "Destination changed during write.");
  };
  try {
    for (const { file, bytes } of staged) {
      await assertTarget();
      const output = path.join(target, file.path);
      await fs.mkdir(path.dirname(output), { recursive: true });
      if (await fs.realpath(path.dirname(output)) !== path.dirname(output))
        throw new RegistryError("UNSAFE_DESTINATION", "Source path parent changed.");
      await fs.writeFile(output, bytes, { flag: "wx" });
    }
  } catch (e) {
    try {
      await assertTarget();
      await fs.rm(target, { recursive: true, force: true });
    } catch {}
    throw e;
  }
  return { destination: target, files: staged.length, bytes: total, dependencies: bundle.dependencies, next: [...bundle.designSystem ? ["Read KLIC-DESIGN-SYSTEM.json and DESIGN.md (source) or README.md (theme) before implementation."] : [], "Read README.md and per-file notices.", "bun install", "bun run dev"], executedCommands: [] };
}
var TOOL_DEFINITIONS = [
  { name: "klic_search", title: "Search KLIC library", description: "Find components and blocks with task-relevant query, kind, status, group or token filters. Returns matches, release and nextCursor, including separate clean labels.ko/en and categoryLabels.ko/en; both language values are searchable. Status defaults to ready. Use planned to inspect proposals. Detail supports brief, compact and full. Search does not return raw source or create files.", inputSchema: { type: "object", properties: { query: { type: "string", maxLength: 200 }, kind: { type: "string", enum: ["all", "component", "block"] }, status: { type: "string", enum: ["ready", "planned", "all"] }, limit: { type: "integer", minimum: 1, maximum: 100 }, token: { type: "string", maxLength: 200 }, group: { type: "string", maxLength: 100 }, cursor: { type: "string", pattern: "^\\d{1,7}$" }, detail: { type: "string", enum: [...DETAIL_LEVELS], default: "full" } }, additionalProperties: false }, annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } },
  { name: "klic_get_item", title: "Get KLIC item", description: "Read one component or block by kind and id. Every detail level includes separate clean labels.ko/en and categoryLabels.ko/en; the legacy name remains a string. Results include status and requested fields; full includes the DESIGN contract, limits and source notice. Chart items expose design.chart selection, data, accessibility and QA guidance. Follow next to expand detail. This does not download source or create a workspace.", inputSchema: { type: "object", properties: { kind: { type: "string", enum: ["component", "block"] }, id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, detail: { type: "string", enum: [...DETAIL_LEVELS], default: "full" } }, required: ["kind", "id"], additionalProperties: false }, annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } },
  { name: "klic_get_contract", title: "Read KLIC capabilities", description: "Read current KLIC release, designSystem.revision, integration capabilities and limitations. Full returns the shared policy; brief and compact include next links. This describes KLIC data, not verification of an external product.", inputSchema: { type: "object", properties: { detail: { type: "string", enum: [...DETAIL_LEVELS], default: "full" } }, additionalProperties: false }, annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } }
];
TOOL_DEFINITIONS.push({ name: "klic_search_motions", title: "Search KLIC motions", description: "Search motion recipes by title, use case or category. Returns localized matches, source identity and nextCursor; full includes implementation examples and reduced-motion guidance. Search does not create files.", inputSchema: { type: "object", properties: { query: { type: "string", maxLength: 200 }, category: { type: "string", enum: MOTION_CATEGORY_IDS }, limit: { type: "integer", minimum: 1, maximum: 100 }, cursor: { type: "string", pattern: "^\\d{1,7}$" }, detail: { type: "string", enum: [...DETAIL_LEVELS], default: "full" } }, additionalProperties: false }, annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } }, { name: "klic_get_motion", title: "Get KLIC motion", description: "Read one motion by canonical id. Returns source identity, attribution, reduced-motion guidance and preview limits; full includes CSS, JavaScript, React and Vue SFC examples. The public npm package may not yet export the Vue runtime; check delivery metadata. Reading does not create files.", inputSchema: { type: "object", properties: { id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, detail: { type: "string", enum: [...DETAIL_LEVELS], default: "full" } }, required: ["id"], additionalProperties: false }, annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } });
TOOL_DEFINITIONS.push({ name: "klic_get_install_plan", title: "Get KLIC source delivery plan", description: "Plan delivery for a ready component or block. Select html/react (the legacy default) or Vue to choose the matching source workspace. Returns the selected framework, manifest link, CLI commands, release and design policy revision. It does not download files, write a workspace or execute commands.", inputSchema: { type: "object", properties: { kind: { type: "string", enum: ["component", "block"] }, id: { type: "string", pattern: "^[a-z0-9-]{1,90}$" }, framework: { type: "string", enum: ["html", "react", "vue"] } }, required: ["kind", "id"], additionalProperties: false }, annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } });
var themeIdSchema = { type: "string", pattern: "^[a-z0-9-]{1,90}$" };
var themeSelectionSchema = { type: "object", properties: { id: themeIdSchema, profile: { type: "string", enum: THEME_PROFILES, default: "core" }, material: { type: "string", enum: THEME_MATERIALS, default: "flat" }, mode: { type: "string", enum: THEME_MODES, default: "system" } }, required: ["id"], additionalProperties: false };
var themeReadAnnotations = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };
TOOL_DEFINITIONS.push({ name: "klic_list_themes", title: "List KLIC themes", description: "Search theme names. Returns the default theme, profiles, materials, modes and matches; full also includes the inventory. It does not apply a theme or create files.", inputSchema: { type: "object", properties: { query: { type: "string", maxLength: 200 }, detail: { type: "string", enum: [...DETAIL_LEVELS], default: "full" } }, additionalProperties: false }, annotations: themeReadAnnotations }, { name: "klic_get_theme", title: "Get KLIC theme", description: "Read one theme. Full returns light and dark token values with CSS import and application instructions; shorter details link to more fields. It does not modify an app or generate a kit.", inputSchema: { type: "object", properties: { id: themeIdSchema, detail: { type: "string", enum: [...DETAIL_LEVELS], default: "full" } }, required: ["id"], additionalProperties: false }, annotations: themeReadAnnotations }, { name: "klic_get_theme_install_plan", title: "Get KLIC theme delivery plan", description: "Plan a standalone kit for a theme and profile, material and mode. Returns a manifest link, commands and scope; check publication status before using commands. It does not fetch files, modify an app or run commands.", inputSchema: themeSelectionSchema, annotations: themeReadAnnotations });
TOOL_DEFINITIONS.push(...KLIC_CHART_METADATA_TOOL_DEFINITIONS);
var ALL_TOOL_DEFINITIONS = [...TOOL_DEFINITIONS, ...KLIC_CHART_LOCAL_TOOL_DEFINITIONS];
for (const tool of ALL_TOOL_DEFINITIONS) {
  const outputSchema = KLIC_SCHEMA_INVENTORY.toolOutputs[tool.name];
  if (!outputSchema)
    throw new Error(`Missing KLIC response schema for ${tool.name}.`);
  tool.outputSchema = outputSchema;
}
function callRegistryTool(registry, name, input = {}, responder = null) {
  if (KLIC_CHART_LOCAL_TOOL_NAMES.includes(name) && responder?.transport !== "stdio-mcp")
    throw new RegistryError("LOCAL_ONLY", "Chart rows and chart rendering are available through local stdio MCP only.");
  let value;
  if (name === "klic_search_motions")
    value = searchMotions(registry.motions, input);
  else if (name === "klic_get_motion")
    value = getMotionRecord(registry.motions, input);
  else if (name === "klic_list_themes")
    value = listThemes(registry, input);
  else if (name === "klic_get_theme")
    value = getTheme(registry, input);
  else if (name === "klic_get_theme_install_plan")
    value = getThemeDeliveryPlan(registry, input);
  else if (name === "klic_get_install_plan")
    value = getDeliveryPlan(registry, input);
  else if (name === "klic_search")
    value = searchRegistry(registry, input);
  else if (name === "klic_get_item")
    value = getRegistryItem(registry, input);
  else if (name === "klic_get_contract")
    value = getContract(registry, input);
  else if ([...KLIC_CHART_METADATA_TOOL_DEFINITIONS, ...KLIC_CHART_LOCAL_TOOL_DEFINITIONS].some((tool) => tool.name === name))
    value = executeKlicChartTool(name, input, invalid);
  else
    throw new RegistryError("UNKNOWN_TOOL", `Unknown tool: ${name}`);
  if (value.detail === "full" && (name === "klic_search_motions" || name === "klic_get_motion"))
    value = { ...value, ...systemFields(registry) };
  if (name !== "klic_get_install_plan" && name !== "klic_get_theme_install_plan")
    value = withRegistryProvenance(value, registry, value.schemaVersion);
  return responder ? withResponder(value, responder) : value;
}
function errorBody(error) {
  return { error: { code: error instanceof RegistryError ? error.code : "INTERNAL_ERROR", message: error instanceof RegistryError ? error.message : "The operation could not be completed." } };
}
function safeBaseURL(value = SITE_ORIGIN) {
  let url;
  try {
    url = new URL(value);
  } catch {
    invalid("base must be an absolute HTTPS URL.");
  }
  if (url.username || url.password || url.protocol !== "https:" && !(url.protocol === "http:" && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)))
    invalid("Use HTTPS, or HTTP on localhost for development.");
  url.hash = "";
  url.search = "";
  if (!url.pathname.endsWith("/"))
    url.pathname += "/";
  return url;
}
function safeRequestHeaders(input) {
  let headers;
  try {
    headers = new Headers(input);
  } catch {
    invalid("Invalid request headers.");
  }
  for (const name of headers.keys())
    if (!["accept", "x-klic-api-key"].includes(name))
      invalid("Only Accept and X-KLIC-API-Key request headers are supported.");
  const key = headers.get("x-klic-api-key");
  if (key !== null && !/^[\x21-\x7e]{1,4096}$/.test(key))
    invalid("Invalid KLIC API key format.");
  return headers;
}
function checkRemoteResponse(response, code, label) {
  if (response.redirected)
    throw new RegistryError("UNSAFE_REDIRECT", "Registry requests must remain on the selected base. Redirects are not followed.");
  if (response.status === 429) {
    const raw = response.headers?.get("retry-after");
    let seconds = null;
    if (raw && /^\d+$/.test(raw) && Number.isSafeInteger(Number(raw)))
      seconds = Number(raw);
    else if (raw && Number.isFinite(Date.parse(raw)))
      seconds = Math.max(0, Math.ceil((Date.parse(raw) - Date.now()) / 1000));
    throw new RegistryError("RATE_LIMITED", seconds === null ? "Request limit reached. Retry later according to the server limit." : `Request limit reached. Retry after ${seconds} seconds.`);
  }
  if (!response.ok)
    throw new RegistryError(code, `${label} returned HTTP ${response.status}.`);
  return response;
}
async function fetchRegistryResource(base, reference, fetcher, headers, { timeout = 15000, code = "SOURCE_UNAVAILABLE", label = "Source" } = {}) {
  const baseURL = safeBaseURL(base);
  let target;
  try {
    target = new URL(reference, baseURL);
  } catch {
    throw new RegistryError("INVALID_REGISTRY", "Invalid resource URL.");
  }
  if (target.origin !== baseURL.origin || target.username || target.password)
    throw new RegistryError("INVALID_REGISTRY", "Resource must stay on the selected registry origin.");
  const response = await fetcher(target, { headers: safeRequestHeaders(headers), redirect: "error", credentials: "omit", signal: AbortSignal.timeout(timeout) });
  return checkRemoteResponse(response, code, label);
}
async function loadRegistry(base = SITE_ORIGIN, fetcher = globalThis.fetch, { headers } = {}) {
  const response = await fetchRegistryResource(base, "api/v1/registry.json", fetcher, headers, { code: "REGISTRY_UNAVAILABLE", label: "Registry" });
  return validateRegistry(await response.json());
}
async function loadThemeRegistry(base = SITE_ORIGIN, fetcher = globalThis.fetch, { headers } = {}) {
  const response = await fetchRegistryResource(base, "api/v1/themes.json", fetcher, headers, { label: "Theme catalog" });
  const catalog = await response.json();
  if (!record(catalog) || typeof catalog.release !== "string" || !catalog.release)
    throw new RegistryError("INVALID_REGISTRY", "Expected a versioned theme catalog.");
  validateDesignSystem(catalog.designSystem);
  const registry = { schemaVersion: SITE_METADATA.versions.registrySchema, release: catalog.release, themes: catalog, ...catalog.designSystem ? { designSystem: catalog.designSystem } : {} };
  themeCatalog(registry);
  return registry;
}
function createMCPSession(options = {}) {
  return { legacyInitialized: false, legacyReady: false, ...record(options.clientCapabilities) ? { clientCapabilities: options.clientCapabilities } : {}, ...record(options.responder) ? { responder: { ...options.responder } } : {} };
}
function handleMCPRequest(registry, request, session = createMCPSession()) {
  const failure = (id, code, message) => ({ jsonrpc: "2.0", id, error: { code, message } });
  if (!record(request) || request.jsonrpc !== "2.0" || typeof request.method !== "string" || "id" in request && (typeof request.id !== "string" && !Number.isInteger(request.id)))
    return failure(null, -32600, "Invalid Request");
  if (!("id" in request)) {
    if (request.method === "notifications/initialized" && session.legacyInitialized)
      session.legacyReady = true;
    return null;
  }
  const id = request.id, params = request.params ?? {};
  if (!record(params))
    return failure(id, -32602, "Invalid params");
  const requestedVersion = params._meta?.["io.modelcontextprotocol/protocolVersion"];
  const modern = request.method === "server/discover" || requestedVersion === MCP_MODERN_PROTOCOL;
  if (requestedVersion && !PROTOCOL_VERSIONS.includes(requestedVersion))
    return { jsonrpc: "2.0", id, error: { code: -32022, message: "Unsupported protocol version", data: { supported: PROTOCOL_VERSIONS, requested: requestedVersion } } };
  if (modern && (requestedVersion !== MCP_MODERN_PROTOCOL || !record(params._meta?.["io.modelcontextprotocol/clientCapabilities"])))
    return failure(id, -32602, "Required protocolVersion and clientCapabilities metadata is missing.");
  if (!modern && request.method !== "initialize" && request.method !== "ping" && !session.legacyReady)
    return failure(id, -32600, "Initialize the legacy connection before calling tools.");
  const suppliedClientCapabilities = modern ? params._meta?.["io.modelcontextprotocol/clientCapabilities"] : request.method === "initialize" ? params.capabilities : undefined;
  if (record(suppliedClientCapabilities))
    session.clientCapabilities = suppliedClientCapabilities;
  const clientCapabilities = record(suppliedClientCapabilities) ? suppliedClientCapabilities : session.clientCapabilities;
  const transport = session.responder?.transport || "mcp";
  let result;
  if (request.method === "server/discover")
    result = { supportedVersions: PROTOCOL_VERSIONS, capabilities: { tools: {}, resources: {}, prompts: {} }, _meta: { "io.modelcontextprotocol/serverInfo": { name: "klic-registry", version: INTEGRATION_VERSION } }, ttlMs: 60000, cacheScope: "public" };
  else if (request.method === "initialize") {
    if (typeof params.protocolVersion !== "string" || !record(params.capabilities) || !record(params.clientInfo))
      return failure(id, -32602, "Initialize requires protocolVersion, capabilities and clientInfo.");
    session.legacyInitialized = true;
    session.legacyReady = false;
    session.clientCapabilities = params.capabilities;
    result = { protocolVersion: MCP_LEGACY_PROTOCOL, capabilities: { tools: {}, resources: {}, prompts: {} }, serverInfo: { name: "klic-registry", version: INTEGRATION_VERSION }, instructions: "Read klic_get_contract first and record release, designSystem.revision and actual responder/toolkit versions. Explore chart types, KLIC profiles and interactions with the chart metadata tools. Chart rows are processed only by local stdio chart tools; hosted endpoints accept metadata only. Validate with klic_validate_chart before klic_show_chart. Search the KLIC item catalog with task-relevant filters and follow next. Only ready items can be delivered; planned items provide guidance only; not-specified means evidence is missing. Check source notices before delivery. Request a delivery plan only when implementation needs source; it does not download files, write a workspace or execute commands." };
  } else if (request.method === "ping")
    result = {};
  else if (request.method === "tools/list")
    result = { tools: [...TOOL_DEFINITIONS, ...getKlicChartMcpTools({ transport, clientCapabilities })], ...requestedVersion === MCP_MODERN_PROTOCOL ? { ttlMs: 60000, cacheScope: "public" } : {} };
  else if (request.method === "tools/call") {
    if (typeof params.name !== "string" || !ALL_TOOL_DEFINITIONS.some((tool) => tool.name === params.name) || "arguments" in params && !record(params.arguments))
      return failure(id, -32602, "Unknown tool or invalid call params");
    try {
      const value = callRegistryTool(registry, params.name, params.arguments ?? {}, session.responder || { transport: "mcp" });
      result = { content: [{ type: "text", text: JSON.stringify(value) }], structuredContent: value, isError: false };
    } catch (error) {
      const value = errorBody(error);
      result = { content: [{ type: "text", text: JSON.stringify(value) }], structuredContent: value, isError: true };
    }
    if (requestedVersion === MCP_MODERN_PROTOCOL)
      result.resultType = "complete";
  } else if (request.method === "resources/list")
    result = { resources: getKlicChartResources({ transport, clientCapabilities }) };
  else if (request.method === "resources/read") {
    if (typeof params.uri !== "string")
      return failure(id, -32602, "resources/read requires a URI.");
    const resource = readKlicChartResource(params.uri);
    if (!resource)
      return failure(id, -32002, "Chart resource not found.");
    result = { contents: [resource] };
  } else if (request.method === "prompts/list")
    result = { prompts: getKlicChartPromptList() };
  else if (request.method === "prompts/get") {
    if (typeof params.name !== "string" || "arguments" in params && !record(params.arguments))
      return failure(id, -32602, "prompts/get requires a prompt name and object arguments.");
    const prompt = getKlicChartPrompt(params.name, params.arguments || {});
    if (!prompt)
      return failure(id, -32602, "Unknown KLIC chart prompt.");
    result = prompt;
  } else
    return failure(id, -32601, "Method not found");
  if (modern)
    result.resultType = "complete";
  return { jsonrpc: "2.0", id, result };
}
var CLI_OPTIONS = Object.freeze({ list: ["kind", "status", "limit", "cursor", "token", "group", "detail"], search: ["kind", "status", "limit", "cursor", "token", "group", "detail"], get: ["detail"], source: ["variant", "framework"], contract: ["detail"], plan: ["framework"], add: ["framework", "out", "dry-run"], mcp: [], motion: ["query", "category", "limit", "cursor", "detail"], theme: ["query", "detail", "profile", "material", "mode", "out", "dry-run"] });
var THEME_CLI_OPTIONS = { list: ["query", "detail"], get: ["detail"], plan: ["profile", "material", "mode"], add: ["profile", "material", "mode", "out", "dry-run"] };
function cliHelp() {
  return `KLIC Toolkit ${INTEGRATION_VERSION} — Bun ${SITE_METADATA.toolchain.bun} preferred; Node.js ${SITE_METADATA.toolchain.nodeMinimum}+ supported.

${BUN_CLI_COMMAND} search input --kind component
${BUN_CLI_COMMAND} list --kind component --limit 5
${BUN_CLI_COMMAND} get component input --detail full
${BUN_CLI_COMMAND} plan block course-catalog
${BUN_CLI_COMMAND} add block course-catalog --out ./course-demo --dry-run
${BUN_CLI_COMMAND} add block course-catalog --framework vue --out ./course-vue-demo
${BUN_CLI_COMMAND} mcp

Node.js equivalent: ${NODE_CLI_COMMAND} <command> ...
--base HTTPS_ORIGIN   Read a compatible registry (default: KLIC public site).
--local              Read ./dist/api/v1/registry.json and bundle assets from a source checkout.
KLIC_API_KEY         Optional environment variable; never pass it in a URL or command argument.
429                  Stops without retrying; reports Retry-After.

Read the contract first. Record release and designSystem.revision; check responder and toolkit versions separately. Explore with brief or compact, then follow the returned next field. In search results, ready means available, planned is a proposal, and not-specified means evidence is missing. Use KLIC-DESIGN-SYSTEM.json to inspect policy responsibilities, preset bounds and conflict order. Search ranks exact ID/name matches first, then prefixes, partial matches and metadata. Ties retain registry order and cursors follow ranking. Full item contracts expose tokenContext, evidence-backed variantSupport and available frameworks; preview forms are examples, not product props. Component source supports HTML and Vue; block workspaces support React and Vue. Check limitations and source notices. The --framework vue option selects Vue source or a runnable Vue workspace. Review add --dry-run before writing to a new folder.
Only HTTP downloads consume server request quota. add and theme add verify integrity, refuse overwrite and do not execute shell commands.
`;
}
async function runCLI(argv, io = {}) {
  const stdout = io.stdout || process.stdout, stderr = io.stderr || process.stderr;
  const args = [...argv], command = args.shift() || "help", positional = [], flags = {};
  const responder = { ...record(io.responder) ? io.responder : {}, transport: command === "mcp" ? "stdio-mcp" : "cli" };
  const write = (value) => stdout.write(JSON.stringify(withResponder(value, responder), null, 2) + `
`);
  try {
    for (let i = 0;i < args.length; i++) {
      const arg = args[i];
      if (arg.startsWith("--")) {
        const name = arg.slice(2);
        if (!["base", "kind", "status", "limit", "cursor", "local", "out", "dry-run", "token", "group", "query", "category", "profile", "material", "mode", "variant", "framework", "detail"].includes(name))
          invalid(`Unknown option: ${arg.split("=")[0]}`);
        if (Object.hasOwn(flags, name))
          invalid(`Duplicate option: --${name}`);
        if (name === "local" || name === "dry-run")
          flags[name] = true;
        else {
          if (!args[i + 1] || args[i + 1].startsWith("--"))
            invalid(`Missing value for ${arg}`);
          flags[name] = args[++i];
        }
      } else
        positional.push(arg);
    }
    if (command === "help" || command === "--help") {
      stdout.write(cliHelp());
      return 0;
    }
    if (!Object.hasOwn(CLI_OPTIONS, command))
      invalid(`Unknown command: ${command}`);
    for (const name of Object.keys(flags))
      if (!["local", "base", ...CLI_OPTIONS[command]].includes(name))
        invalid(`Option --${name} is not supported by ${command}.`);
    if (flags.detail !== undefined)
      detailLevel({ detail: flags.detail });
    if (flags.local && flags.base)
      invalid("Choose --local or --base, not both.");
    if (flags.base)
      safeBaseURL(flags.base);
    const themeCommand = command === "theme" ? positional.shift() : null;
    const motionCommand = command === "motion" ? positional.shift() : null;
    let themeInput;
    if (command === "theme") {
      if (!Object.hasOwn(THEME_CLI_OPTIONS, themeCommand))
        invalid("theme requires list, get, plan or add.");
      for (const name of Object.keys(flags))
        if (!["local", "base", ...THEME_CLI_OPTIONS[themeCommand]].includes(name))
          invalid(`Option --${name} is not supported by theme ${themeCommand}.`);
      if (themeCommand === "list") {
        if (positional.length)
          invalid("theme list takes no positional arguments.");
        themeInput = { ...flags.query !== undefined ? { query: flags.query } : {}, ...flags.detail !== undefined ? { detail: flags.detail } : {} };
        themeQuery(themeInput);
      } else {
        if (positional.length !== 1)
          invalid(`theme ${themeCommand} requires a theme id.`);
        themeInput = { id: positional[0], ...flags.detail !== undefined ? { detail: flags.detail } : {}, ...Object.fromEntries(["profile", "material", "mode"].filter((name) => flags[name] !== undefined).map((name) => [name, flags[name]])) };
        if (themeCommand === "get")
          themeId(themeInput);
        else
          themeSelection(themeInput);
      }
      if (themeCommand === "add" && (typeof flags.out !== "string" || !flags.out.trim() || flags.out.includes("\x00")))
        invalid("theme add requires --out with a new directory.");
    } else if (command === "motion") {
      if (!["list", "get"].includes(motionCommand))
        invalid("motion requires list or get.");
      const motionFlags = motionCommand === "list" ? ["local", "base", "query", "category", "limit", "cursor", "detail"] : ["local", "base", "detail"];
      for (const name of Object.keys(flags))
        if (!motionFlags.includes(name))
          invalid(`Option --${name} is not supported by motion ${motionCommand}.`);
      if (motionCommand === "list") {
        if (positional.length)
          invalid("motion list takes no positional arguments.");
        if (flags.query !== undefined && (typeof flags.query !== "string" || flags.query.length > 200))
          invalid("query must be a string of at most 200 characters.");
        if (flags.detail !== undefined)
          detailLevel({ detail: flags.detail });
        if (flags.limit !== undefined && (!Number.isInteger(Number(flags.limit)) || Number(flags.limit) < 1 || Number(flags.limit) > 100))
          invalid("limit must be an integer from 1 to 100.");
        if (flags.cursor !== undefined && !/^\d{1,7}$/.test(flags.cursor))
          invalid("cursor must be the numeric string returned by the previous page.");
      } else {
        if (positional.length !== 1)
          invalid("motion get requires a motion id.");
        if (!/^[a-z0-9-]{1,90}$/.test(positional[0]))
          invalid("Provide a valid motion id.");
      }
    } else if (["get", "source", "plan", "add"].includes(command)) {
      if (positional.length !== 2)
        invalid(`${command} requires kind and id.`);
      if (!["component", "block"].includes(positional[0]) || !/^[a-z0-9-]{1,90}$/.test(positional[1]))
        invalid("Provide kind (component or block) and a valid catalog id.");
    } else if (positional.length > (command === "search" ? 1 : 0))
      invalid("Unexpected positional argument.");
    if (flags.variant !== undefined && (positional[0] !== "component" || !/^[a-z0-9-]{1,90}$/.test(flags.variant)))
      invalid("--variant requires a component and a valid form id from get.");
    if (flags.framework !== undefined) {
      const allowed = positional[0] === "component" ? ["html", "vue"] : ["react", "vue"];
      if (!allowed.includes(flags.framework))
        invalid(`--framework for ${positional[0]} must be ${allowed.join(" or ")}.`);
    }
    if (command === "add" && !flags.out)
      invalid("add requires --out with a new directory.");
    if (flags.cursor && !/^\d{1,7}$/.test(flags.cursor))
      invalid("cursor must be the numeric string returned by the previous page.");
    if (command === "list" || command === "search")
      searchRegistry({ items: [] }, { query: command === "search" ? positional[0] || "" : "", ...Object.fromEntries(Object.entries(flags).filter(([name]) => CLI_OPTIONS[command].includes(name)).map(([name, value]) => [name, name === "limit" ? Number(value) : name === "cursor" ? "0" : value])) });
    const fetcher = io.fetch || globalThis.fetch;
    const environment = io.env || process.env;
    const apiKey = flags.local ? "" : environment.KLIC_API_KEY || "";
    if (apiKey && !/^[\x21-\x7e]{1,4096}$/.test(apiKey))
      invalid("Invalid KLIC_API_KEY format. Use an environment variable without whitespace.");
    const requestHeaders = apiKey ? { "X-KLIC-API-Key": apiKey } : {};
    const fs = flags.local ? await import("node:fs/promises") : null;
    const registry = flags.local ? validateRegistry(JSON.parse(await fs.readFile("dist/api/v1/registry.json", "utf8"))) : command === "theme" ? await loadThemeRegistry(flags.base, fetcher, { headers: requestHeaders }) : await loadRegistry(flags.base, fetcher, { headers: requestHeaders });
    if (command === "theme") {
      if (themeCommand === "list") {
        write(listThemes(registry, themeInput));
        return 0;
      }
      if (themeCommand === "get") {
        write(getTheme(registry, themeInput));
        return 0;
      }
      const plan = getThemeDeliveryPlan(registry, themeInput);
      if (themeCommand === "plan") {
        write(plan);
        return 0;
      }
      const fetchBytes = async (url) => {
        if (flags.local)
          return fs.readFile("dist" + url);
        const r = await fetchRegistryResource(flags.base, url, fetcher, requestHeaders, { timeout: 30000 });
        return new Uint8Array(await r.arrayBuffer());
      };
      const bundle = JSON.parse(new TextDecoder().decode(await fetchBytes(plan.manifest)));
      if (bundle.kind !== "theme" || ["id", "profile", "material", "mode"].some((name) => bundle[name] !== plan[name]))
        throw new RegistryError("INVALID_REGISTRY", "Bundle identity mismatch.");
      const installed = await installBundle(bundle, flags.out, fetchBytes, { dryRun: !!flags["dry-run"] });
      write({ ...installed, ...systemFields(registry), next: ["Read README.md and theme.config.json in the new kit folder.", `Import the CSS in your app: import ${JSON.stringify(installed.destination + "/theme.css")};`, `Import { applyTheme } from ${JSON.stringify(installed.destination + "/apply-theme.mjs")}; then call const theme = applyTheme(document.documentElement).`, `The kit uses theme ${plan.id}, profile ${plan.profile}, material ${plan.material}, and mode ${plan.mode}. Use theme.update({mode: 'dark'}) to update it.`] });
      return 0;
    }
    if (command === "motion") {
      const catalog = requireMotionCatalog(registry.motions);
      if (motionCommand === "list") {
        const result = withRegistryProvenance(searchMotions(catalog, { ...flags.query !== undefined ? { query: flags.query } : {}, ...flags.category !== undefined ? { category: flags.category } : {}, ...flags.limit !== undefined ? { limit: Number(flags.limit) } : {}, ...flags.cursor !== undefined ? { cursor: flags.cursor } : {}, ...flags.detail !== undefined ? { detail: flags.detail } : {} }), registry);
        write({ ...result, ...result.detail === "full" ? systemFields(registry) : {} });
      } else {
        const result = withRegistryProvenance(getMotionRecord(catalog, { id: positional[0], ...flags.detail !== undefined ? { detail: flags.detail } : {} }), registry);
        write({ ...result, ...result.detail === "full" ? systemFields(registry) : {} });
      }
      return 0;
    }
    if (command === "plan" || command === "add") {
      if (positional.length !== 2)
        invalid(`${command} requires kind and id.`);
      const plan = getDeliveryPlan(registry, { kind: positional[0], id: positional[1], ...flags.framework ? { framework: flags.framework } : {} });
      if (command === "plan") {
        write(plan);
        return 0;
      }
      if (!flags.out)
        invalid("add requires --out with a new directory.");
      const fetchBytes = async (url) => {
        if (flags.local)
          return fs.readFile("dist" + url);
        const r = await fetchRegistryResource(flags.base, url, fetcher, requestHeaders, { timeout: 30000 });
        return new Uint8Array(await r.arrayBuffer());
      };
      const bundle = JSON.parse(new TextDecoder().decode(await fetchBytes(plan.manifest)));
      if (bundle.kind !== plan.kind || bundle.id !== plan.id)
        throw new RegistryError("INVALID_REGISTRY", "Bundle identity mismatch.");
      write({ ...await installBundle(bundle, flags.out, fetchBytes, { dryRun: !!flags["dry-run"] }), ...systemFields(registry) });
      return 0;
    }
    if (command === "mcp") {
      if (positional.length)
        invalid("mcp takes no positional arguments.");
      const { createInterface } = await import("node:readline");
      const input = io.stdin || process.stdin, session = createMCPSession({ responder });
      for await (const line of createInterface({ input, crlfDelay: Infinity })) {
        let response;
        try {
          if (Buffer.byteLength(line) > 1048576)
            throw new Error("Message too large");
          response = handleMCPRequest(registry, JSON.parse(line), session);
        } catch {
          response = { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } };
        }
        if (response)
          stdout.write(JSON.stringify(response) + `
`);
      }
      return 0;
    }
    if (command === "list" || command === "search") {
      if (positional.length > (command === "search" ? 1 : 0))
        invalid("Unexpected positional argument.");
      write(searchRegistry(registry, { query: command === "search" ? positional[0] || "" : "", ...flags.kind ? { kind: flags.kind } : {}, ...flags.status ? { status: flags.status } : {}, ...flags.limit ? { limit: Number(flags.limit) } : {}, ...flags.cursor ? { cursor: flags.cursor } : {}, ...flags.token ? { token: flags.token } : {}, ...flags.group ? { group: flags.group } : {}, ...flags.detail !== undefined ? { detail: flags.detail } : {} }));
    } else if (command === "contract") {
      if (positional.length)
        invalid("contract takes no arguments.");
      write(getContract(registry, { ...flags.detail !== undefined ? { detail: flags.detail } : {} }));
    } else {
      if (positional.length !== 2)
        invalid(`${command} requires kind and id.`);
      const result = getRegistryItem(registry, { kind: positional[0], id: positional[1], ...flags.detail !== undefined ? { detail: flags.detail } : {} });
      if (command === "get")
        write(result);
      else {
        const variant = flags.variant !== undefined ? result.item.variants?.find((form) => form.id === flags.variant) : null;
        if (flags.variant !== undefined && !variant)
          throw new RegistryError("NOT_FOUND", "No component form named " + flags.variant + ". Use get to list variants.");
        const source = flags.framework === "vue" ? variant?.frameworks?.vue?.source || result.item.frameworks?.vue?.source : variant ? variant.source : result.item.source;
        if (!source?.path)
          throw new RegistryError("SOURCE_UNAVAILABLE", "This framework has no source export.");
        if (!/^\/(?:api\/v1\/sources\/|block-sources\/)[a-zA-Z0-9_./-]+$/.test(source.path) || source.path.split("/").includes(".."))
          throw new RegistryError("INVALID_REGISTRY", "Unsafe source reference.");
        if (flags.local)
          stdout.write(await fs.readFile("dist" + source.path, "utf8"));
        else {
          const response = await fetchRegistryResource(flags.base, source.path, fetcher, requestHeaders);
          stdout.write(await response.text());
        }
      }
    }
    return 0;
  } catch (error) {
    stderr.write(JSON.stringify(errorBody(error)) + `
`);
    return 1;
  }
}
if (typeof process !== "undefined" && process.versions?.node) {
  const { pathToFileURL } = await import("node:url");
  if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
    process.exitCode = await runCLI(process.argv.slice(2));
}
export {
  API_BASE_PATH,
  BUN_CLI_COMMAND,
  CLI_OPTIONS,
  INTEGRATION_VERSION,
  KLIC_SCHEMA_INVENTORY,
  MCP_URL,
  NODE_CLI_COMMAND,
  PROTOCOL_VERSIONS,
  RegistryError,
  SITE_METADATA,
  SITE_ORIGIN,
  TOOL_DEFINITIONS,
  callRegistryTool,
  createMCPSession,
  errorBody,
  getContract,
  getDeliveryPlan,
  getMotionRecord,
  getRegistryItem,
  getTheme,
  getThemeDeliveryPlan,
  handleMCPRequest,
  installBundle,
  listThemes,
  loadRegistry,
  loadThemeRegistry,
  runCLI,
  safeBaseURL,
  searchMotions,
  searchRegistry,
  validateMotionCatalog,
  validateRegistry,
  withRegistryProvenance,
  withResponder
};
