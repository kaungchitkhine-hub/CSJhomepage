let dom = document.querySelector('#alert')
let element = React.createElement(
    'h4', { class: 'alert alert-primary' }, "React sample page."
)
ReactDOM.render(element, dom);