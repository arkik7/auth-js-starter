'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SearchIcon } from 'lucide-react';
import { toast } from 'sonner';

const SearchForm = () => {
  const onSearchIconClick = () => {
    toast.success('Yeah! Toast works, now you can make this form work also ;) Happy coding!', {
      position: 'top-center',
    });
  };

  return (
    <form>
      <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
        <div className="flex-[1_0_0%]">
          <Label htmlFor="article" className="sr-only">
            Search article
          </Label>
          <Input name="article" className="h-full" id="article" placeholder="Search article" />
        </div>
        <div className="flex-[0_0_auto]">
          <Button size={'icon'} type="button" onClick={onSearchIconClick}>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
