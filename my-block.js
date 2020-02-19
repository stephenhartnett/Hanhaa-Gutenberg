wp.blocks.registerBlockType('hanhaa/hanhaa-gutenberg',{
	title: 'Hanhaa Gutenberg',
	icon: 'admin-site',
	category: 'common',
	attributes: {
		content: {type: 'string'},
		color: {type: 'string'}
},
	edit: function(props) {
		return wp.element.createElement(
"div", null, wp.element.createElement(
"h3", null, "Hanhaa Gutenberg"), 
wp.element.createElement("input", {
  type: "text"
}));
}, 
	save: function(props) {
        return null
    }
}) 