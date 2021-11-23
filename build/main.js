(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, options);
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_ui();
    }
  });

  // src/main.tsx
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  function main_default() {
    widget.register(AdvancedCard);
  }
  function AdvancedCard() {
    const [type, setType] = useSyncedState("type", "Card Type");
    const [title, setTitle] = useSyncedState("title", "Title");
    const items = [
      {
        itemType: "action",
        propertyName: "edit",
        tooltip: "Edit"
      },
      {
        tooltip: "Open URL",
        propertyName: "openurl",
        itemType: "action"
      }
    ];
    async function onChange({
      propertyName
    }) {
      await new Promise(function(resolve) {
        if (propertyName === "edit") {
          showUI({ width: 240, height: 180 }, { type, title });
          once("UPDATE_TYPE", function(type2) {
            setType(type2);
            resolve();
          });
          once("UPDATE_TITLE", function(title2) {
            setTitle(title2);
            resolve();
          });
        }
      });
    }
    usePropertyMenu(items, onChange);
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: 400,
      height: "hug-contents",
      cornerRadius: 12,
      fill: "#F4F4F4",
      stroke: "#eaeaea",
      strokeWidth: 0.5
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: 400,
      direction: "vertical",
      height: "hug-contents"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      fill: "#E76557",
      width: "fill-parent",
      height: 48
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontFamily: "Inter",
      fontSize: 22,
      textCase: "upper",
      letterSpacing: 3,
      fill: "#fff",
      fontWeight: "bold",
      italic: false
    }, type)), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      padding: 22,
      spacing: 24,
      height: "hug-contents",
      width: "fill-parent",
      direction: "vertical"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 24,
      height: "hug-contents",
      width: "fill-parent",
      horizontalAlignText: "left"
    }, title))));
  }
  var widget, AutoLayout, Text, useSyncedState, usePropertyMenu;
  var init_main = __esm({
    "src/main.tsx"() {
      init_lib();
      ({ widget } = figma);
      ({ AutoLayout, Text, useSyncedState, usePropertyMenu } = widget);
    }
  });

  // <stdin>
  var modules = { "src/main.tsx--default": (init_main(), main_exports)["default"] };
  var commandId = true ? "src/main.tsx--default" : figma.command;
  modules[commandId]();
})();
