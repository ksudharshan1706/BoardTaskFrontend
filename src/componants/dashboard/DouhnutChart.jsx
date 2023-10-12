import { ResponsivePie } from '@nivo/pie'
import React from 'react'

const DouhnutChart = () => {
    const data = [
        {
          "id": "Basic Tees",
          "label": "Basic Tees",
          "value": 55
        },
        {
          "id": "Custom Short Pants",
          "label": "Custom Short Pants",
          "value": 31
        },
        {
          "id": "Super Hoodies",
          "label": "Super Hoodies",
          "value": 14
        },
      ]
  return (
            <ResponsivePie
        data={data}
        startAngle={-100}
        isInteractive={false}
        // margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        margin={{ top: 40, right: 30, bottom: 30, left: 30 }}
        sortByValue={true}
        innerRadius={0.99}
        borderWidth={20}
        cornerRadius={5}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel2' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        // arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}

    />

  )
}

export default DouhnutChart
