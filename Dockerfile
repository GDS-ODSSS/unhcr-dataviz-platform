FROM nginx:alpine
#RUN mkdir -p /usr/share/nginx/html/unhcr-dataviz-platform

COPY app/ /usr/share/nginx/html/

#COPY default.conf /etc/nginx/conf.d/default.conf
