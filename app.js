var esResponseParser = require("es-response-parser");

var esResponse = {
      "aggregations": {
        "offerId": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [{
            "key": "F1A2LqSYD3u",
            "doc_count": 6,
            "os": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [{
                "key": "Desktop",
                "doc_count": 6,
                "campaignClick": {"value": 6.0},
                "offerClick": {"value": 6.0},
                "revenue": {"value": 0.0}
              }]
            }
          }, {
            "key": "F1MGDprRRJP",
            "doc_count": 6,
            "os": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [{
                "key": "Desktop",
                "doc_count": 6,
                "campaignClick": {"value": 6.0},
                "offerClick": {"value": 6.0},
                "revenue": {"value": 0.0}
              }]
            }
          }, {
            "key": "F1MGDprnv7y",
            "doc_count": 5,
            "os": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [{
                "key": "Desktop",
                "doc_count": 5,
                "campaignClick": {"value": 5.0},
                "offerClick": {"value": 5.0},
                "revenue": {"value": 0.0}
              }]
            }
          }]
        }
      }
    };
    
  var result = esResponseParser.parse(esResponse);
  
  console.log(result);