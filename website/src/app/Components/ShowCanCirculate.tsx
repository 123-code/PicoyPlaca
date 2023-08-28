import * as React from 'react';

interface Props {
    on?: boolean | undefined;
  }
const TrafficLight = ({ on }: Props) => {

    const LightStyle = {
        borderRadius: '50%',
        width: 100,
        height: 100,
        animation: 'glow 2s ease infinite',   
    }
    const yellowStyle = {
        ...LightStyle,
        background: 'yellow',
      }

      const greenStyle = {
        ...LightStyle,
        background: 'green',
      }

      const redStyle = {
        ...LightStyle,
        background: 'red',
      }

      
    
    return (
      <div>
       
        {on ? <div style={greenStyle}></div> : <div style={redStyle}></div>}
      </div>
    )
  }

  export default TrafficLight;