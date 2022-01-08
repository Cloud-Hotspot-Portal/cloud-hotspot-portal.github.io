解决gitbook输出的Html中文变成了Unicode字符 此博文包含图片 (2019-10-10 17:03:30)转载▼
分类： 电脑软件
GITBOOK 在生成html 时所有的中文字符都变为这样的Unicode 代码，不便于查修改，同时也增大了文件。
 

.gitbook\versions\3.2.3\node_modules\dom-serializer\node_modules\entities\lib\encode.js

转为Unicode 的代码，在这个文件的 42行左右。 如下，我改为singleCharReplacer1了
 
然后再增加了一个 singleCharReplacer 直接return c 这样对程序影响小。


里面还有其他的函数也实现了转换。也可能有个配置文件，我没的找到，如果有人找到了欢迎在下面留言。这样就不需要改文件
