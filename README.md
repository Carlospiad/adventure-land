# adventure-land
Website para Adventure Land


Comandos para trabajar en la terminal y mod el website

```
jekyll build
s3_website push
jekyll serve
```
Usage
Here's how you can get started:

Create API credentials that have sufficient permissions to S3. More info here.
Go to your website directory
Run s3_website cfg create. This generates a configuration file called s3_website.yml.
Put your AWS credentials and the S3 bucket name into the file
Run s3_website cfg apply. This will configure your bucket to function as an S3 website. If the bucket does not exist, the command will create it for you.
Run s3_website push to push your website to S3. Congratulations! You are live.
At any later time when you would like to synchronise your local website with the S3 website, simply run s3_website push again. (It will calculate the difference, update the changed files, upload the new files and delete the obsolete files.)
