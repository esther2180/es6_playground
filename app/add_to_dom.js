import $ from 'jquery';

export default function(type, text) {
    const element = $(`<${type}>`, {
        text: text
    });

    $('#root').append(element);
}
