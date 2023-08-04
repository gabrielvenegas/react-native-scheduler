import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Scheduler } from '@vixtech/react-native-scheduler';
export default function App() {
    const onExecute = async () => { };
    return (React.createElement(View, { style: styles.container },
        React.createElement(Scheduler, { onExecute: onExecute, hour: 12, minute: 0, second: 0 })));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
});
