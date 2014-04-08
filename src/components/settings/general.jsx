/** @jsx React.DOM */

app.components.general = function() {
  var General = React.createClass({
    updateSetting: function(ev) {
      var setting = ev.target.getAttribute("data-setting");
      app.settings[setting] = ev.target.value;

      if (typeof app.user !== "undefined") {
        app.io.emit("saveSettings", app.settings);
      }

      this.forceUpdate();
    },

    render: function() {
      return (
        <div>
          <label>Time Format</label>
          <div>
            <input data-setting="time_format" defaultValue={this.props.settings.time_format} onChange={this.updateSetting} />
            <a target="_blank" href="http://momentjs.com/docs/#/displaying/format/"><i className="fa fa-question-circle"></i></a>
            <div>
              <span>e.g. {moment().format(this.props.settings.time_format)}</span>
            </div>
          </div>
          <hr />
          <label>Display Types</label>
          <div>
          {this.props.settings.enabled_types.map(function(type) {
            return (
              <div>
                <span>{type}</span>
              </div>
            );
          })}
          </div>
        </div>
      )
    }
  });

  return General;
}
