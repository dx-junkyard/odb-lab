import { TagMap } from '@renderer/hooks/use-filter-tag';
import { ProjectTag } from '@renderer/types/project-tag';
import { SearchFilter } from '@renderer/components/atoms/search/filter/SearchFilter';

interface SearchFilterListProps {
  tags: TagMap;
  updateTagState: (tag: ProjectTag, selected: boolean) => void;
}

const SearchFilterList = ({ tags, updateTagState }: SearchFilterListProps) => {
  const tagsArray = Array.from(tags.entries());

  return (
    <div className="flex flex-nowrap space-x-4 overflow-x-auto">
      {tagsArray.map(([tag, selected]) => (
        <SearchFilter
          key={tag.id}
          label={tag.title}
          isSelected={selected}
          onClick={() => updateTagState(tag, !selected)}
        />
      ))}
    </div>
  );
};

export default SearchFilterList;
