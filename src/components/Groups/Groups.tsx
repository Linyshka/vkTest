import { useContext, useEffect, useState } from 'react';
import { Group } from '../../constants/types';
import GroupCard from '../GroupCard/GroupCard';
import { getGroups } from '../../api';
import { Cell, Panel, PanelHeader, Spinner, View } from '@vkontakte/vkui';
import { FiltersContext } from '../../constants/FiltersContext';
import styles from "./Group.module.css";

const Groups = () => {
  const [groups, setGroups] = useState<Group[] | undefined>();
  const {color, privacyType, friends} = useContext(FiltersContext);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    getGroups(color, privacyType, friends).then((data) => {
      setGroups(data);
    }).finally(() => setIsLoading(false));
  }, [color, privacyType, friends]);

  if (isLoading) {
    return <Spinner size="large" className={styles.spinner} />
  }

  return (
    <>
        <View activePanel="information_cell">
          {groups?.length ? 
            <Panel id="information_cell">
              <PanelHeader>Группы</PanelHeader>
              {groups.map((group: Group) => <GroupCard key={group.id} group={group}/>)}
            </Panel> :
            <Panel id='information_cell'>
              <PanelHeader>Ничего не найдено</PanelHeader>
              <Cell>Извините! Мы не можем найти никакой информации по вашему запросу. Пожалуйста, введите дргугие данные или попробуйте позже.</Cell>
            </Panel>}
        </View>
    </>
 
  )
}

export default Groups;