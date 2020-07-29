# React Native Draggable GridView

A drag-and-drop-enabled GridView component for React Native.

[demo](https://snack.expo.io/@okamura/react-native-draggable-gridview)

![React Native Draggable GridView Demo](https://github.com/5up-okamura/react-native-draggable-gridview/raw/master/demo.gif)

## Install

```
npm install --save react-native-draggable-gridview
```

## Props

| Name                  | Type                                       | Default                                                               |
| --------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| data                  | any[]                                      |                                                                       |
| numColumns?           | number                                     | 1                                                                     |
| containerMargin?      | ContainerMargin                            | {top:0, bottom:0, left:0, right:0}                                    |
| width?                | number                                     | Dimensions.get('window').width                                        |
| activeOpacity?        | number                                     | 0.5                                                                   |
| delayLongPress?       | number                                     | 500                                                                   |
| selectedStyle?        | ViewStyle                                  | {shadowColor:'#000', shadowRadius:8, shadowOpacity:0.2, elevation:10} |
| animationConfig?      | AnimationConfig                            | {easing:Easing.ease, duration:300, useNativeDriver:true}              |
| keyExtractor?         | (item: any) => string                      |                                                                       |
| renderItem            | (item: any, index?: number) => JSX.Element |                                                                       |
| renderLockedItem?     | (item: any, index?: number) => JSX.Element |                                                                       |
| locked?               | (item: any, index?: number) => boolean     |                                                                       |
| onBeginDragging?      | () => void                                 |                                                                       |
| onPressCell?          | (item: any, index?: number) => void        |                                                                       |
| onReleaseCell?        | (data: any[]) => void                      |                                                                       |
| onEndAddAnimation?    | (item: any) => void                        |                                                                       |
| onEndDeleteAnimation? | (item: any) => void                        |                                                                       |

## Usage

```
import GridView from 'react-native-draggable-gridview'
```

```
const [data, setData] = useState(['1', '2', '3', '4', '5', '6'])

<GridView
    data={data}
    numColumns={3}
    renderItem={(item) => (
        <View style={{ flex: 1, margin: 1, justifyContent: 'center', backgroundColor: 'gray' }}>
        <Text style={{ textAlign: 'center' }}>{item}</Text>
        </View>
    )}
    onReleaseCell={(items) => setData(items)}
/>
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
