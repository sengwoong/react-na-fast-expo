import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Badge } from './Badge';
import { Icon } from './Icons';

// export class TabIcon extends React.Component{

//     render(){
//         if(this.props.visibleBadge){
//             return (
//                 <View>
//                     <Badge fontSize={10}>
//                         <Icon
//                             name={this.props.iconName}
//                             size={20}
//                             color={'black'}/>
//                     </Badge>

//                 </View>
//             )
//         }

//         return (
//             <View>
//                 <Icon
//                     name={this.props.iconName}
//                     size={20}
//                     color={'black'}/>
//             </View>
//         )
//     }
// }

export const TabIcon:React.FC<{
    visibleBadge:boolean;
    iconName: keyof typeof Ionicons.glyphMap
    iconColor:string;
}> = (props) => {
  if (props.visibleBadge) {
    return (
      <Badge>
        <Icon
          name={props.iconName}
          size={20}
          color={props.iconColor}
        />
      </Badge>
    );
  }

  return (
    <Icon
      name={props.iconName}
      size={20}
      color={props.iconColor}
    />
  );
};
