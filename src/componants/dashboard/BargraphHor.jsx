// import { ResponsivePie } from '@nivo/pie'
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const BargraphHor = () => {
    const data = [
        {
          "country": "Week 1",
          "User": 500,
          "Guest": 400,
        },
        {
          "country": "Week 2",
          "User": 300,
          "Guest": 400,
        },
        {
          "country": "Week 3",
          "User": 200,
          "Guest": 300,
        },
        {
          "country": "Week 4",
          "User": 400,
          "Guest": 300,
        },
        
      ]
  return (
    <div style={{height:"500px",width:"107%"}}>
         <ResponsiveBar
        data={data}
        keys={[
            'User',
            'Guest'
        ]}
        innerPadding={8}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        height="500"
        padding={0.5}
        borderRadius={5}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'set2' }}
        axisTop={null}
        axisRight={null}
        layout="horizontal"
        axisLeft={{
            
            tickValues:2,
            tickSize:0,
            tickPadding: 20,
            
        }}
        axisBottom={{
            tickValues:3,
            tickSize: 2,
            tickPadding: 5,
            tickRotation: 0,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[]}
        // role="application"
        // barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    </div>
  )
}

export default BargraphHor