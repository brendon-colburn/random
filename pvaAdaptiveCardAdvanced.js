pvaAdvancedAdaptiveCard = {
    type: "AdaptiveCard",
    '$schema': "http://adaptivecards.io/schemas/adaptive-card.json",
    version: "1.3",
    body: [
      {
        type: "TextBlock",
        text: Topic.ResultObject.description, // "Note that you always need to specify Topic as the root object"
        size: "Medium",
        weight: "Bolder",
        wrap: true,
        separator: true
      },
      {
        type: "FactSet",
        facts: 
          ForAll(Topic.ResultObject.imagetags, // So this is what was different, we used Power FX to return the facts for the factset
          {
            title: ThisRecord.id,
            value: ThisRecord.tag
          })
        ,
        separator: true,
        id: "id"
      }
    ]
  }

  // this is the old way of doing it, which didn't seem to work any longer:

 oldWay = Json({
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.3",
    "body": [
        {
            "type": "TextBlock",
            "text": "${description}",
            "size": "Medium",
            "weight": "Bolder",
            "wrap": true,
            "separator": true
        },
        {
            "type": "FactSet",
            "facts": [
                {
                    "$data": "${imagetags}",
                    "title": "${id}",
                    "value": "${tag}"
                }
            ],
            "separator": true,
            "$data": "${$root['imagetags[0]']}",
            "id": "id"
        }
    ]
});