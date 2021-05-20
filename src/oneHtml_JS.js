
// let dom = document.querySelector('#oneHtml')
// let element = React.createElement(
//     'p', {}, 'Hello React Application!'
// )
// ReactDOM.render(element, dom)
let dom = document.querySelector('#complex')
let element = React.createElement(
    'div', {}, [
    React.createElement(
        'h2', {}, "Hello!"
    ),

    React.createElement(
        'h4', { className: 'alert alert-success' }, "React sample page."
    ),

    React.createElement(
        'ul', { className: 'list-group' }, [
        React.createElement(
            'li', { className: 'list-group-item active' }, "First item."
        ),
        React.createElement(
            'li', { className: 'list-group-item' }, "Second item."
        ),
        React.createElement(
            'li', { className: 'list-group-item' }, "Third item."
        ),
    ]
    ),

    React.createElement(
        'ol', { className: 'list-group' }, [
        React.createElement(
            'li', { className: 'list-group-item' }, "First Number."
        ),
        React.createElement(
            'li', { className: 'list-group-item' }, "Second Number."
        ),
        React.createElement(
            'li', { className: 'list-group-item' }, 'Third Number.'
        ),
    ]
    ),
])
ReactDOM.render(element, dom);
