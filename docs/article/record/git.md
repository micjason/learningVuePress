如果远程新建了一个分支，本地没有该分支，可以用
`git checkout --track origin/branch_name`
这时候本地会新建一个分支名叫branch_name，会自动跟踪远程的同名分支branch_name
***
用上面中方法，得到的分支名永远和远程的分支名一样，如果想新建一个本地分支不同名字，同时跟踪一个远程分支可以利用。
`git checkout -b new_branch_name branch_name`
***
本地分支推送到远程
`git push --set-upstream origin branch_name`
***
`git log --pretty=oneline` 漂亮一行显示
***
`git log --oneline` 简洁显示
***
`git diff [文件名]` 将工作区中的文件和暂存区进行比较
***
`git diff 哈希值 文件名`  和历史中的一个版本比较
***
`git diff [本地库中历史版本][文件名]` 将工作区中的文件和本地库里历史记录
比较，不带文件名，比较多个文件
***
`git branch -d branch_name` 删除分支