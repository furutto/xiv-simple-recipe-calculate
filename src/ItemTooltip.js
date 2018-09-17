import React from 'react';

export default class ItemTooltip extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div >
          ITEM LEVEL {data.level}
          <br />
          製作 : {data.crafter}
          <br />

          { data.job != "" && (
            <div >装備 : {data.job}<br /></div>
          )}

          { data.bParam0 != "" && (
            <div>
              <hr />
                { [0,1,2,3,4,5].map((index)=> (
                <div >
                  {data['bParam' + index] != "" && data['sValue' + index] > 0 && (
                    <div>{data['bParam' + index]} : {data['bValue' + index]} (HQ {data['bValue' + index] +  data['sValue' + index]})<br /></div>
                  )}
                  {data['bParam' + index] != "" && data['sValue' + index] == 0 && (
                    <div>{data['bParam' + index]} : {data['bValue' + index]}<br /></div>
                  )}
                </div>
                ))}
            </div>
          )}

          { data.craftsmanship > 0 && (
            <div>
              <hr />
              <div >必要作業精度 : {data.craftsmanship}　　必要加工精度 : {data.control}<br /></div>
            </div>
          )}
      </div>

    );
  }
}
