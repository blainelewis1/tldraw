import { TldrawApp } from '~state'
import { strokes } from '~state/shapes/shared'
import { ColorStyle, DashStyle, SizeStyle, TDShapeType } from '~types'

// TODO: there are both line and arrow as separate tools

type SupportedCommands =
  | 'Select'
  | 'Erase'
  | 'Draw'
  | 'Rectangle'
  | 'Line'
  | 'Ellipse'
  | 'Triangle'
  | 'Undo'
  | 'Redo'
  | 'Delete'
  | 'Duplicate'
  | 'Rotate'
  | 'White'
  | 'Light gray'
  | 'Gray'
  | 'Black'
  | 'Green'
  | 'Cyan'
  | 'Blue'
  | 'Indigo'
  | 'Violet'
  | 'Red'
  | 'Orange'
  | 'Yellow'
  | 'Fill'
  | 'No Fill'
  | 'Draw dash'
  | 'Solid'
  | 'Dashed'
  | 'Dotted'
  | 'Small'
  | 'Medium'
  | 'Large'

// TODO: Align?

export function onCommandEntered(app: TldrawApp, command: string, log: (s: any) => void) {
  log({ type: 'COMMAND_ENTERED', command })
  if (command === 'Select') {
    app.selectTool('select')
  } else if (command === 'Erase') {
    app.selectTool('erase')
  } else if (command === 'Line') {
    app.selectTool(TDShapeType.Line)
  } else if (command === 'Draw') {
    app.selectTool(TDShapeType.Draw)
  } else if (command === 'Rectangle') {
    app.selectTool(TDShapeType.Rectangle)
  } else if (command === 'Ellipse') {
    app.selectTool(TDShapeType.Ellipse)
  } else if (command === 'Triangle') {
    app.selectTool(TDShapeType.Triangle)
  } else if (command === 'Undo') {
    app.undo()
  } else if (command === 'Redo') {
    app.redo()
  } else if (command === 'Delete') {
    app.delete()
  } else if (command === 'Duplicate') {
    app.duplicate()
  } else if (command === 'Rotate') {
    app.rotate()
  }

  // app.style({ color: style as ColorStyle })
  else if (command == 'White') {
    app.style({ color: ColorStyle.White })
  } else if (command == 'Light gray') {
    app.style({ color: ColorStyle.LightGray })
  } else if (command == 'Gray') {
    app.style({ color: ColorStyle.Gray })
  } else if (command == 'Black') {
    app.style({ color: ColorStyle.Black })
  } else if (command == 'Green') {
    app.style({ color: ColorStyle.Green })
  } else if (command == 'Cyan') {
    app.style({ color: ColorStyle.Cyan })
  } else if (command == 'Blue') {
    app.style({ color: ColorStyle.Blue })
  } else if (command == 'Indigo') {
    app.style({ color: ColorStyle.Indigo })
  } else if (command == 'Violet') {
    app.style({ color: ColorStyle.Violet })
  } else if (command == 'Red') {
    app.style({ color: ColorStyle.Red })
  } else if (command == 'Orange') {
    app.style({ color: ColorStyle.Orange })
  } else if (command == 'Yellow') {
    app.style({ color: ColorStyle.Yellow })
  } else if (command === 'Fill') {
    // !app.getAppState().currentStyle.isFilled
    app.style({ isFilled: true })
  } else if (command === 'No Fill') {
    // !app.getAppState().currentStyle.isFilled
    app.style({ isFilled: false })
  } else if (command === 'Draw dash') {
    app.style({ dash: DashStyle.Draw })
  } else if (command === 'Solid') {
    app.style({ dash: DashStyle.Solid })
  } else if (command === 'Dashed') {
    app.style({ dash: DashStyle.Dashed })
  } else if (command === 'Dotted') {
    app.style({ dash: DashStyle.Dotted })
  } else if (command === 'Small') {
    app.style({ size: SizeStyle.Small })
  } else if (command === 'Medium') {
    app.style({ size: SizeStyle.Medium })
  } else if (command === 'Large') {
    app.style({ size: SizeStyle.Large })
  } else if (command === 'Zoom In') {
    app.zoomIn()
  } else if (command === 'Zoom Out') {
    app.zoomOut()
  }
}
