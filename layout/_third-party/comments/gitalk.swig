{% if not (theme.duoshuo and theme.duoshuo.shortname) and not theme.duoshuo_shortname %}
  {% if theme.gitalk.enable %}
    {% if page.comments %}
      <script type="text/javascript">
        var gitalk = new Gitalk({
          clientID: '{{ theme.gitalk.clientID }}',
          clientSecret: '{{ theme.gitalk.clientSecret }}',
          repo: '{{ theme.gitalk.repo }}',
          owner: '{{ theme.gitalk.owner }}',
          admin: ['{{ theme.gitalk.owner }}'],
          id: '{{ page.title }}',
          distractionFreeMode: true,
        });
        gitalk.render('gitalk-container');
      </script>
    {% endif %}

  {% endif %}
{% endif %}
