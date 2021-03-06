const envMock  = 
    {
        "environment": {
            "dsl_id": 1,
            "components": [
                {
                    "name":"TimeSlider",
                    "is_visible": true
                },
                {
                    "name":"Legend",
                    "is_visible": true,
                    "data": [
                        {
                            "title": "mapLegend.no",
                            "worldStyle": "2"
                        },
                        {
                            "title": "mapLegend.partial",
                            "worldStyle": "1"
                        },
                        {
                            "title": "mapLegend.full",
                            "worldStyle": "2"
                        },
                        {
                            "title": "mapLegend.noData",
                            "worldStyle": "3"
                        }
                    ]
                },
                {
                    "name":"CountriesSearcher",
                    "is_visible": true
                } 
            ],
            "overlay": {
                "tabs": [
                    {
                        "id": 1,
                        "title": "Daily Life",
                        "is_visible": true,
                        "key_values": {
                            "population": "Population",
                            "maximum_assembly": "Maximum assembly",
                            "daily_life": "Daily life (restrictions)"
                        }
                    },
                    {
                        "id": 2,
                        "title": "Mobility",
                        "is_visible": true,
                        "key_values": {
                            
                        }
                    },
                    {
                        "id": 3,
                        "title": "Reports",
                        "is_visible": true,
                        "key_values": {
                            
                        }
                    }
                ]
            }
        }
    };

export default envMock;