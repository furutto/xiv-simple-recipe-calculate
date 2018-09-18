import React from 'react';

export default class ItemTooltip extends React.Component {
  render() {
    const data = this.props.data;

    let requireCraft = "";
    if(data.craftsmanship > 0 || data.control > 0){
      requireCraft = "必要作業精度 : " + data.craftsmanship + "　必要加工精度 : " + data.control;
    }

    let params = [];
    for(let i=0; i<=5; i++){
      let _bParam = data['bParam' + i];
      if(_bParam == ""){
        continue;
      }

      let param = _bParam + " : " + data['bValue' + i];
      for(let j=0; j<=5; j++){
        if(_bParam == data['sParam' + j] && data['sValue' + j] > 0){
          param += " (HQ " + (data['bValue' + i] + data['sValue' + j]) + ")";
          break;
        }
      }
      params.push(param);
    }

    return (
      <div >
          ITEM LEVEL {data.level}
          <br />

          { data.category != "" && (
            <div >部類 : {data.category}<br /></div>
          )}

          { data.job != "" && (
            <div >装備 : {data.job}<br /></div>
          )}
          
          製作 : {data.crafter}
          <br />

          { params.length > 0 && (
            <div>
              <hr />
                { params.map((_param)=> (
                  <div>{_param}<br /></div>
                ))}
            </div>
          )}

          { data.desc != "" && (
            <div>
              <hr />
              {data.desc}
              <br />
            </div>
          )}

          { requireCraft != "" && (
            <div>
              <hr />
              {requireCraft}
            </div>
          )}

      </div>

    );
  }
}
