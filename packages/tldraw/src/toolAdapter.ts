import { TldrawApp } from '~state'
import { strokes } from '~state/shapes/shared'
import { ColorStyle, DashStyle, SizeStyle, TDShapeType } from '~types'

// TODO: there are both line and arrow as separate tools

type SupportedCommands =
  | 'select'
  | 'erase'
  | 'draw'
  | 'rectangle'
  | 'line'
  | 'ellipse'
  | 'triangle'
  | 'undo'
  | 'redo'
  | 'delete'
  | 'duplicate'
  | 'rotate'
  | 'white'
  | 'lightgray'
  | 'gray'
  | 'black'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'fill'
  | 'nofill'
  | 'drawdash'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'small'
  | 'medium'
  | 'large'

// TODO: Align?

export function onCommandEntered(app: TldrawApp, command: string) {
  if (command === 'select') {
    app.selectTool('select')
  } else if (command === 'erase') {
    app.selectTool('erase')
  } else if (command === 'line') {
    app.selectTool(TDShapeType.Line)
  } else if (command === 'draw') {
    app.selectTool(TDShapeType.Draw)
  } else if (command === 'rectangle') {
    app.selectTool(TDShapeType.Rectangle)
  } else if (command === 'ellipse') {
    app.selectTool(TDShapeType.Ellipse)
  } else if (command === 'triangle') {
    app.selectTool(TDShapeType.Triangle)
  } else if (command === 'undo') {
    app.undo()
  } else if (command === 'redo') {
    app.redo()
  } else if (command === 'delete') {
    app.delete()
  } else if (command === 'duplicate') {
    app.duplicate()
  } else if (command === 'rotate') {
    app.rotate()
  }

  // app.style({ color: style as ColorStyle })
  else if (command == 'white') {
    app.style({ color: ColorStyle.White })
  } else if (command == 'lightgray') {
    app.style({ color: ColorStyle.LightGray })
  } else if (command == 'gray') {
    app.style({ color: ColorStyle.Gray })
  } else if (command == 'black') {
    app.style({ color: ColorStyle.Black })
  } else if (command == 'green') {
    app.style({ color: ColorStyle.Green })
  } else if (command == 'cyan') {
    app.style({ color: ColorStyle.Cyan })
  } else if (command == 'blue') {
    app.style({ color: ColorStyle.Blue })
  } else if (command == 'indigo') {
    app.style({ color: ColorStyle.Indigo })
  } else if (command == 'violet') {
    app.style({ color: ColorStyle.Violet })
  } else if (command == 'red') {
    app.style({ color: ColorStyle.Red })
  } else if (command == 'orange') {
    app.style({ color: ColorStyle.Orange })
  } else if (command == 'yellow') {
    app.style({ color: ColorStyle.Yellow })
  } else if (command === 'fill') {
    // !app.getAppState().currentStyle.isFilled
    app.style({ isFilled: true })
  } else if (command === 'nofill') {
    // !app.getAppState().currentStyle.isFilled
    app.style({ isFilled: false })
  } else if (command === 'drawdash') {
    app.style({ dash: DashStyle.Draw })
  } else if (command === 'solid') {
    app.style({ dash: DashStyle.Solid })
  } else if (command === 'dashed') {
    app.style({ dash: DashStyle.Dashed })
  } else if (command === 'dotted') {
    app.style({ dash: DashStyle.Dotted })
  } else if (command === 'small') {
    app.style({ size: SizeStyle.Small })
  } else if (command === 'medium') {
    app.style({ size: SizeStyle.Medium })
  } else if (command === 'large') {
    app.style({ size: SizeStyle.Large })
  } else if (command === 'zoomin') {
    app.zoomIn()
  } else if (command === 'zoomout') {
    app.zoomOut()
  }
}
