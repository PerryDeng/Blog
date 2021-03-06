Ext.define('ExtjsExamples.controllers.MasterController', {
    extend: 'Ext.app.Controller',
    refs: [
        {
            ref: 'centerContainer',
            selector: '#center-container'
        }
    ],


    launch: function () {
        var me = this, controller = Ext.create('ExtjsExamples.controllers.MultiselectableDatePickerController', {
            application: me.application
        });
        controller.launch();
        me.replaceCenterContent(controller.getView());
    },

    replaceCenterContent: function (view) {
        var me = this, centerContainer = me.getCenterContainer();
        centerContainer.removeAll(true);
        centerContainer.add(view);
    }

});
