Ext.onReady(function() {
    var Tab = new Ext.create('Ext.tab.Panel', 
    {
        height: 100,
        width: 200,
        renderTo: 'tabtest',
        items: [
            {
                // Explicitly define the xtype of this Component configuration.
                // This tells the Container (the tab panel in this case)
                // to instantiate a Ext.panel.Panel when it deems necessary
                xtype: 'panel',
                title: 'Tab One',
                html: 'The first tab',
                listeners: {
                    activate: function() {
                        Ext.MessageBox.alert( 'active One', 'Tab One was rendered.');
                    }
                }
            },
            {
                // xtype for all Component configurations in a Container
                title: 'Tab Two',
                html: 'The second tab',
                listeners: {
                    activate: function() {
                        Ext.MessageBox.alert( 'active Two', 'Tab Two was rendered.');
                    }
                }
            }
        ]
    });
});
