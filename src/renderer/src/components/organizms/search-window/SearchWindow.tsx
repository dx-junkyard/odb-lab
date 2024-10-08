import { SearchInput } from '@renderer/components/atoms/search/input/SearchInput';
import { Button } from '@renderer/components/atoms/ui-parts/button/Button';
import { ProjectTag } from '@renderer/types/project-tag';
import { TagMap } from '@renderer/hooks/use-filter-tag';
import SearchFilterList from '@renderer/components/molecules/search/search-filter-list/SearchFilterList';

interface SearchWindowProps {
  query: string;
  updateQuery: (query: string) => void;
  updateIsTyping: (isTyping: boolean) => void;
  tags: TagMap;
  updateTagState: (tag: ProjectTag, selected: boolean) => void;
}

export const SearchWindow = ({
  query,
  updateQuery,
  updateIsTyping,
  tags,
  updateTagState,
}: SearchWindowProps) => {
  return (
    <div className="bg-white w-full text-black px-[10px] py-[20px] flex flex-col space-y-4">
      <div className="flex flex-col space-y-1 md:space-y-2">
        <h1 className="text-sm">オープンデータを検索する</h1>
        <div className="flex space-x-4">
          <SearchInput
            query={query}
            updateQuery={(q) => updateQuery(q)}
            updateIsTyping={updateIsTyping}
          />
          <Button
            color={'primary'}
            size={'xl'}
            label={'検索'}
            onClick={() => updateIsTyping(false)}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-sm">ジャンルで絞り込む</h1>
        <SearchFilterList tags={tags} updateTagState={updateTagState} />
      </div>
    </div>
  );
};
