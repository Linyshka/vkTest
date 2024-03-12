import { useEffect, useState } from 'react';
import { Group } from '../../constants/types';
import GroupCard from '../GroupCard/GroupCard';
import { getGroups } from '../../api';
import { Panel, PanelHeader, View } from '@vkontakte/vkui';

const Groups = () => {
  const [groups, setGroups] = useState<Group[]>();

  useEffect(() => {
    getGroups().then((data) => {
      setGroups(data);
    });
  }, []);

  return (
      <View activePanel="information_cell">
        <Panel id="information_cell">
          <PanelHeader>Группы</PanelHeader>
          {groups?.map((group: Group) => <GroupCard key={group.id} group={group}/>)}
        </Panel>
      </View>
  )
  
}

export default Groups;