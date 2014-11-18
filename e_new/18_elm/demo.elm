import String
import Graphics.Input as Input
import Graphics.Input.Field as Field

content = Input.input Field.noContent

shout text = String.toUpper text
whisper text = String.toLower text

echo text = (shout text) ++ " " ++ (whisper text)

myInput fieldContent =
        Field.field Field.defaultStyle content.handle identity "Speak, Babe!" fieldContent

scene fieldContent =
      flow down
      [ myInput fieldContent, plainText (echo fieldContent.string) ]

main = lift scene content.signal