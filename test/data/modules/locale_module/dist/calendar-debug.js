define("test/locale_module/1.0.0/model-debug", [ "$-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug", "gallery/moment/1.6.2/moment-debug" ], function(require, exports, module) {
    var $ = require("$-debug");
    var Base = require("arale/base/1.0.1/base-debug");
    var moment = require("gallery/moment/1.6.2/moment-debug");
});

define("test/locale_module/1.0.0/calendar-debug", [ "./i18n/{{locale}}/lang-debug", "./model-debug", "$-debug", "gallery/moment/1.6.2/moment-debug", "arale/overlay/0.9.12/overlay-debug", "arale/position/1.0.0/position-debug", "arale/iframe-shim/1.0.0/iframe-shim-debug", "arale/widget/1.0.2/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug", "arale/widget/1.0.2/templatable-debug", "gallery/handlebars/1.0.0/handlebars-debug" ], function(require, exports, module) {
    // Calendar is designed for desktop, we don't need to consider ``zepto``.
    var $ = require("$-debug");
    var moment = require("gallery/moment/1.6.2/moment-debug");
    var Overlay = require("arale/overlay/0.9.12/overlay-debug");
    var Templatable = require("arale/widget/1.0.2/templatable-debug");
    var lang = require("./i18n/{{locale}}/lang-debug");
    var lang = require("./i18n/{{locale}}/lang-debug.js");
    var template = '<div class="ui-calendar">\n<ul class="ui-calendar-navigation" data-role="navigation-container">\n<li class="ui-calendar-previous-year" data-role="prev-year">&lt;&lt;</li>\n<li class="ui-calendar-previous-month" data-role="prev-month">&lt;</li>\n<li class="ui-calendar-month-year" data-role="month-year-container">\n<span class="month" data-role="mode-month" data-value="{{month.current.value}}">{{_ month.current.label}}</span>\n<span class="year" data-role="mode-year">{{year.current.label}}</span>\n</li>\n<li class="ui-calendar-next-month" data-role="next-month">&gt;</li>\n<li class="ui-calendar-next-year" data-role="next-year">&gt;&gt;</li>\n</ul><ul class="ui-calendar-control" data-role="pannel-container">\n{{#if mode.date}}\n{{#each day.items}}\n<li class="ui-calendar-day ui-calendar-day-{{value}}" data-role="day" data-value="{{value}}">{{_ label}}</li>\n{{/each}}\n{{/if}}\n</ul><div class="ui-calendar-data-container" data-role="data-container">\n{{#if mode.date}}\n{{#each date.items}}\n<ul class="ui-calendar-date-column">\n{{#each this}}\n<li class="ui-calendar-day-{{day}} {{className}}\n{{#unless available}}disabled-date{{/unless}}\n"\ndata-role="date" data-value="{{value}}"\n>{{label}}</li>\n{{/each}}\n</ul>\n{{/each}}\n{{/if}}{{#if mode.month}}\n{{#each month.items}}\n<ul class="ui-calendar-month-column">\n{{#each this}}\n<li data-role="month" data-value="{{value}}">{{_ label}}</li>\n{{/each}}\n</ul>\n{{/each}}\n{{/if}}{{#if mode.year}}\n{{#each year.items}}\n<ul class="ui-calendar-year-column">\n{{#each this}}\n<li data-role="{{role}}" data-value="{{value}}">{{_ label}}</li>\n{{/each}}\n</ul>\n{{/each}}\n{{/if}}\n</div><ul class="ui-calendar-footer" data-role="time-container">\n<li class="ui-calendar-today" data-role="today">{{_ message.today}}</li>\n{{#if mode.time}}\n<li class="ui-calendar-time" colspan="2" data-role="time"><span class="ui-calendar-hour">{{time.hour}}</span> : {{time.minute}}</li>\n{{/if}}\n</ul>\n</div>';
    var CalendarModel = require("./model-debug");
});