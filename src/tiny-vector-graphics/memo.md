```json
[
  {
    "type": "rect",
    "attr": {
      "x": 10,
      "y": 10,
      "width": 20,
      "height": 30,
      "stroke": {
        "color": "#f00",
        "width": 1,
        "dasharray": [1, 3]
      }
    }
  },
  {
    "type": "group",
    "attr": {
      "x": 50,
      "y": 10,
      "children": [
        {
          "type": "rect",
          "attr": {
            "x": 10,
            "y": 10,
            "width": 20,
            "height": 30,
            "stroke": {
              "color": "#f00",
              "width": 1,
              "dasharray": [1, 3]
            }
          }
        },
        {
          "type": "polyline",
          "attr": {
            "points":[[10,20],[30,50],[50,10]],
            "stroke": {
              "color": "#f00",
              "width": 1,
              "dasharray": [1, 3]
            }
          }
        }
      ]
    }
  }
]
```