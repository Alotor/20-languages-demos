Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   "use strict";
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Main",
   $Basics = Elm.Basics.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Graphics$Input = Elm.Graphics.Input.make(_elm),
   $Graphics$Input$Field = Elm.Graphics.Input.Field.make(_elm),
   $List = Elm.List.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $String = Elm.String.make(_elm),
   $Text = Elm.Text.make(_elm);
   var whisper = function (text) {
      return $String.toLower(text);
   };
   var shout = function (text) {
      return $String.toUpper(text);
   };
   var echo = function (text) {
      return _L.append(shout(text),
      _L.append(" ",whisper(text)));
   };
   var content = $Graphics$Input.input($Graphics$Input$Field.noContent);
   var myInput = function (fieldContent) {
      return A5($Graphics$Input$Field.field,
      $Graphics$Input$Field.defaultStyle,
      content.handle,
      $Basics.identity,
      "Speak, Babe!",
      fieldContent);
   };
   var scene = function (fieldContent) {
      return A2($Graphics$Element.flow,
      $Graphics$Element.down,
      _L.fromArray([myInput(fieldContent)
                   ,$Text.plainText(echo(fieldContent.string))
                   ,$Text.plainText(shout(fieldContent.string))]));
   };
   var main = A2($Signal.lift,
   scene,
   content.signal);
   _elm.Main.values = {_op: _op
                      ,content: content
                      ,shout: shout
                      ,whisper: whisper
                      ,echo: echo
                      ,myInput: myInput
                      ,scene: scene
                      ,main: main};
   return _elm.Main.values;
};